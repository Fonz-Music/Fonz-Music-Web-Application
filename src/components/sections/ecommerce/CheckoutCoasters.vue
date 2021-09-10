<template lang="html">
  <div class="container checkout-page">
    <h3 class="text-center" style="color: #ff9425;">checkout</h3>

    <div class="row">

      <div class="col-md-6 col-sm-12">
        <div class="row checkout-info">
          <div class="col-12">
            <c-image 
            :src="require('@/assets/images/CoasterPictures/coasterTransparent2.png')"
            />
          </div>
          <div class="col-12">

            <div style='padding-bottom: 10px;'> 
              <span style="font-size: 20px; color: #341F0D"> {{ currentPackage.title }} </span> <br/>
              <span> {{ currentPackage.quantity }} {{ coasterS }} </span>
            </div>

            <table class="table-sm">
              <tbody>
                <tr style="border-bottom: solid 0.5px lightgrey;">
                  <th scope="row" style="font-weight: 100">subtotal</th>
                  <td class="text-right">
                    {{ determineCurrencySymbol() }}{{ currentPackage.price }}
                  </td>
                </tr>
                <tr style="border-bottom: solid 0.5px lightgrey;">
                  <th scope="row" style="font-weight: 100">shipping</th>
                  <td v-if="!currentPackage.freeShipping" class="text-right">
                    {{ determineCurrencySymbol() }}3
                  </td>
                  <td v-else class="text-right">
                    free
                  </td>
                </tr>
                <tr style="border-bottom: solid 0.5px lightgrey;">
                  <th scope="row" style="font-weight: 100; color: #341F0D">total</th>
                  <td class="text-right">
                    {{ determineCurrencySymbol() }}{{ getTotalPrice() }}
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>

      <div class="col-md-6 col-sm-12">
        <div class="express-checkout row">
          <div id="payment-request-button" class="center-content"></div>
        </div>

        <b-form class="form-container">
          
            <div class="form-section">
              <span class="form-title-text"> e-mail </span>
              <b-form-input 
              v-bind:class="emailFormStatus"
              placeholder="didim@gmail.com"
              v-model="email"
              ></b-form-input>
            </div>

            <div class="form-section">
                <span class="form-title-text"> shipping </span>

                <b-form-input 
                v-bind:class="nameFormStatus"
                placeholder="name"
                v-model="shipping.name"
                ></b-form-input>

                <div
                v-bind:class='shippingFormStatus'
                >
                  <GmapAutocomplete
                    class="auto-complete"
                    placeholder="address"
                    @place_changed="getAddressData"
                  >
                  </GmapAutocomplete>
                </div>
            </div>

            <div class="form-section">
              <span class="form-title-text"> card details </span>
              <div class="form-input-style" style='padding: 10px 15px 10px 15px;'>
                <div id='card-element'></div>
                <div id="card-errors"></div>
              </div>
            </div>

            <div class="form-section">
              <b-form-checkbox
              v-bind:class="consentFormStatus"
              style="padding-top: 0px;"
              id="consent-checkbox"
              v-model="consent">
                I agree to Fonz Music's <a href="https://www.fonzmusic.com/privacy-policy">
                <span style="color: #ff9425;">Privacy Policy</span></a>
              </b-form-checkbox>
            </div>

            <div class="form-section center-content">
              <b-button @click='initiateCheckout()' class="purchase-button">
                purchase
              </b-button>
            </div>
        </b-form>

        <div style='text-align: center; padding-top: 10px;'>
          <c-image
          class='powered-by-stripe'
          :width='120'
          :src="require('@/assets/images/checkout/stripeBlack.svg')"/>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { Checkout } from "@/plugins/checkout.js";
import CImage from "@/components/elements/Image.vue";
console.log({ Checkout });

const axios = require("axios");

export default {
  name: "CCheckoutCoasters",

  components: {
    CImage,
  },

  data() {
    return {
      loaded: false,

      // Conditional Forms
      formError: {
        email: false,
        consent: false,
        name: false,
        shipping: false,
      },

      // User Data
      email: "",
      consent: false,
      shipping: {
        name: '',
        address: {
          line1: '', 
        }
      },
      

      // Stripe Data
      pk: "pk_live_51HCTMlKULAGg50zbqXd9cf5sIUrKrRwHQFBLbTLv56947KWQheJX3nXTNl6H8WTPzm6mVKYlEaYvLg2SyjGKBNio00T4W00Hap",
      // pk: 'pk_test_51HCTMlKULAGg50zbqiZBDhXIYS79K3eHv4atQn6LNjskaB3Q288Hm0JUYcT1ZN6MtFOoWp5IGCHkWtVZneQnGU0j00iR6NFvqU',
      stripe: null,
      elements: null,
      card: null,
      applePay: null,
      clientSecret: "default",
      paymentIntent: null,
      currencySymbol: '€',

      currentPackage: {
        title: "fonz coaster",
        info: "fonz coaster",
        retailPrice: 60,
        price: 28,
        quantity: 1,
        freeShipping: true,
      },

      packageId: "",
      totalPrice: 25,
      coasterS: "coaster"
    }
  },


  beforeMount() {
    const packageId = localStorage.getItem("package");
    if (!packageId) this.$router.push("/buy");
  },

  mounted() {
    let self = this;
     
    this.getPricing();
    this.sendCartIdToServer();
    this.getCart();
    

    // Loading Stripe's SDK
    this.loadStripeSDK(this.pk, 'v3', () => {
      const options = {
        stripeAccount: this.stripeAccount,
        apiVersion: "2020-08-27",
        locale: this.locale, 
      };
      var country = localStorage.getItem("country");

      self.stripe = window.Stripe(this.pk, options);

      // pre-initialised paymentRequest for Apple Pay
      var paymentRequest = self.stripe.paymentRequest({
        currency: self.currency,
        country: country,
        total: {
          label: "Fonz Coaster",
          amount: self.totalPrice * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });


      // Loading & Mounting Stripe's Elements
      console.log('mounting card');
      this.elements = this.stripe.elements();
      // - Credit / Debit Card
      this.card = this.elements.create("card", {
        style: {
          base: {
            color: '#495057',
            fontFamily: 'MuseoSans100, sans-serif',
            fontSize: '14px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
              color: '#fce883',
            },
            '::placeholder': {
              color: 'lightgrey',
            },
          },
          invalid: {
            iconColor: '#ee1112',
            color: '#ee1112',
          },
        }
      });
      this.card.mount("#card-element");
      this.card.addEventListener("change", ({ error }) => {
        const displayError = document.getElementById("card-errors");
        if (error) {
          displayError.textContent = error.message;
          return;
        }
        displayError.textContent = "";
      });

      // - Apple / Google Pay Card
      var prButton = this.elements.create('paymentRequestButton', {
        paymentRequest: paymentRequest,
      });
      paymentRequest.canMakePayment().then(function(result) {
        if (result) {
          prButton.mount("#payment-request-button");
        } 
        else {
          document.getElementById("payment-request-button").style.display = "none";
        }
      });

    });
  },


  methods: {

    // initiateCheckout()
    //
    async initiateCheckout(){
      if(this.checkValid()) {
        this.updateCartDetails();
      }
    },

    // getPricing()
    // - reaches into localStorage and retrieves user's package pricing
    // - adds data locally to component's data
    getPricing() {
      const packageId = localStorage.getItem("package");
      if (!packageId) this.$router.push("/buy");
      axios
        .get(`${this.$API_URL}/i/package/${packageId}/${this.currency}`)
        .then((resp) => {
          this.currentPackage.title = resp.data.title;
          this.currentPackage.quantity = resp.data.quantity;
          this.currentPackage.freeShipping = resp.data.freeShipping;
        })
        .catch((error) => {
          console.error(error);
      });
    },

    // getCart() 
    // - accesses API to retrieve cart information
    // - returns pricing
    getCart() {
      var localCartId = localStorage.getItem("cartId")
      axios
        .get(`${this.$API_URL}/i/cart/${localCartId}`)
        .then((resp) => {
          var currentCart = resp.data;
          this.currentPackage.price = resp.data.price;
          this.currentPackage.retailPrice = resp.data.retailPrice;
          this.cart = currentCart;
        })
        .catch((error) => {
          console.log("error whilst fetching cart information");
          console.error(error);
        });
    },

    // addShippingCost()
    // - accesses API to determine whether there is a shipping cost
    addShippingCost() {
      const cartIdFromUser = localStorage.getItem("cartId");
      axios
        .put(`${this.$API_URL}/i/cart/addons/shipping`, {
          cartId: cartIdFromUser,
        })
        .then((resp) => {
          response = resp.data;
        })
        .catch((error) => {
          console.error("shipping error: " + error);
        });
    },

    // getTotalPrice()
    // Calculates the total price of the cart
    getTotalPrice() {
      var addonTotal = 0;
      if (!this.currentPackage.freeShipping) {
        addonTotal += 3;
        this.coasterS = "coaster"
      }
      else {
        this.coasterS = "coasters"
      }
      return this.currentPackage.price + addonTotal;
    },

    // loadStripeSDK())
    // Inserts the Stripe JS header into the document
    loadStripeSDK: (pk, version = "v3", callback) => {
      let e = document.createElement("script");
      e.src = `https://js.stripe.com/v3`;
      e.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(e);
      e.addEventListener("load", callback);
      console.log("finished loadSDK");
    },


    // submitPayment()
    // - submits payment to Stripe
    // - uses the data in the card-element to make payment
    async submitPayment() {
        try {
        const data = {
          ...this.card
        }
        if (this.amount) {
          data.amount = this.amount;
        }

        console.log(this.clientSecret);
        console.log(data);

        const { token, error } = await this.stripe
        .confirmCardPayment(this.clientSecret, {
          payment_method: {
            card: data
          }
        })
        .then(resp => {
          // alert(JSON.stringify(resp, null, 4));
          localStorage.removeItem('paymentIntent');

          if(resp.error) {
            console.log('error!' + error);
          }
          else {
            this.$router.push({ 
              name: 'ordersuccess',
              params: {
                email: this.email,
                shipping: this.shipping,
                currentPackage: this.currentPackage,
                currency: this.currency,
              }
            });
          }
        })
        .catch(error => {
          console.log('error on submit payment');
          console.error(error);
        })
      }
      catch(error) {
        console.error(error);
      }
    },

    // sendCartIdToServer()
    // - initialises a PaymentIntent
    // - using the user's cartID
    sendCartIdToServer() {
      axios
        .post("/i/checkout/payment-intent", {
          cartId: localStorage.getItem("cartId"),
        })
        .then((resp) => {
          console.log('sent CartId to server');
          this.paymentIntent = resp.data.id;
          console.log('PaymentIntent: ' + this.paymentIntent);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // updateCartDetails
    // - updates a user's cart details
    // - to include their paymentIntent, cartId, shipping and email
    updateCartDetails() {
      axios
        .put("/i/checkout/payment-intent", {
          paymentIntent: this.paymentIntent,
          cartId: localStorage.getItem("cartId"),
          shipping: this.shipping,
          receipt_email: this.email,
        })
        .then((resp) => {
          console.log("beginning on payment intent");
          this.clientSecret = resp.data.client_secret;
          this.submitPayment();
        })
        .catch((error) => {
          console.log("fail making payment intent");
          console.log(error);
        });
    },

    // Helper Functions

    // determineCurrencySymbol()
    // 
    determineCurrencySymbol() {
      if (this.currency == "usd") return "$";
      else if (this.currency == "gbp") return "£";
      else return "€";
    },

    // isEmailValid(email)
    // - checks if an email is valid using regex
    isEmailValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    // addEmailToCart(email)
    // - adds a user's email to their cart
    addEmailToCart(email) {
      const cartId = localStorage.getItem("cartId");
      var response;
      axios
        .put(`${this.$API_URL}/i/cart/${cartId}/${email}`)
        .then(resp => {
          response = resp.data;
          console.log(response);
        })
        .catch(error => {
          console.error(error);
      });
    },


    // checkValid()
    // - checks if all the fields filled out
    // - by the customer are valid
    checkValid() {
      if (this.isEmailValid(this.email)) {
        if(this.shipping.name != "") {
          if(this.shipping.address.line1 != ''){
              if(this.consent) {
                return true;
              }
              else {
                console.log('did not consent')
                this.formError.email = false;
                this.formError.name = false;
                this.formError.shipping = false;
                this.formError.consent = true;
              }
            }
          else {
            this.formError.email = false;
            this.formError.name = false;
            this.formError.shipping = true;
            console.log('invalid address');
          }
        }
        else {
          this.formError.email = false;
          this.formError.name = true;
          console.log('invalid name')
        }
      }
      else {
        this.formError.email = true;
        console.log('invalid email');
      }
    },

    // getAddressData()
    getAddressData(addressData) {

      // console.log(addressData);
      console.log(addressData.formatted_address);
      this.shipping.address.line1 = addressData.formatted_address;
    }

  },

  computed: {
    emailFormStatus: function() {
      return {
        'form-input-style': !this.formError.email,
        'form-error-style': this.formError.email
      }
    },
    consentFormStatus: function() {
      return {
        'form-title-text': !this.formError.consent,
        'consent-error-style': this.formError.consent
      }
    },
    nameFormStatus: function() {
      return {
        'form-input-style': !this.formError.name,
        'form-error-style': this.formError.name
      }
    },
    shippingFormStatus: function() {
      return {
        'form-input-style': !this.formError.shipping,
        'form-error-style': this.formError.shipping
      }
    },
  }
};
</script>


<style lang="css" scoped>
.checkout-page {
  max-width: 1000px;
  width: 80vw;
  padding-top: 100px;
}

.paymentOptions {
  margin: 0 auto;
  max-width: 300px;
  width: 75%;
}
.pay-with-credit {
  font-size: 12pt;
}
.submitButton {
  border: 1px black solid;
  border-radius: 10px;
  background-color: #b288b9;
  color: white;
}
.pay-with-credit {
  font-size: 16px;
}
.paymentOptions {
  padding: 30px;
}

.form-container {
  width: 100%;
}
.form-section {
  padding: 5px;
}
.form-title-text {
  font-size: 0.75rem;
  color: #a8a8a8;
  vertical-align: middle;
}
.checkout-info {
  margin: 10px 5px 0px 5px;
}

.form-input-style {
  font-size: 0.7rem;
  border: solid 1px lightgrey;
  border-radius: 5px; 
  margin: 10px 0px 10px 0px;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
}

.auto-complete {
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  width: 100%;
}

.auto-complete:focus {
  border: solid 0.5px #ff9425 !important;
  box-shadow: -0.5px 0 #ff9425, 0 0.5px #ff9425, 0.5px 0 #ff9425, 0 -0.5px #ff9425 !important;
}

.auto-complete::placeholder {
  color: lightgrey;
  /* Memes are here now friend */
}

.form-error-style {
  vertical-align: middle;
  font-size: 0.7rem;
  border: solid 1px #ed5462;
  border-radius: 5px; 
  margin: 10px 0px 10px 0px;
  background-color: rgba(0, 0, 0, 0)
}

.consent-error-style {
  font-size: 0.75rem;
  color: #ed5462;
  vertical-align: middle;
}

.form-input-style::placeholder {
  color: lightgrey;
}

.form-input-style:focus {
  border: solid 0.5px #ff9425;
  box-shadow: -0.5px 0 #ff9425, 0 0.5px #ff9425, 0.5px 0 #ff9425,
    0 -0.5px #ff9425;
}

.purchase-button {
  background-color: #ff9425;
  width: 100%;
  margin: 5px;
  font-size: 16px;
  text-align: center;
  border: none;
  border-radius: 5px; 
}
.purchase-button:hover {
  cursor: pointer;
}

.express-checkout {
  margin: 5px;
}

.powered-by-stripe {
  margin: auto;
}


</style>
