<template lang="html">
  <div class="container checkout-page">
    <h2 class="text-center" style="padding-bottom: 20px;">checkout</h2>

    <div class="row">
      <div class="col-6">
        <div class="express-checkout row">
          <div class="col-12" style="border: solid 1px lightgrey; border-radius: 5px;">
            <div class="row">
            <div class="col-6">
              Apple Pay
            </div>
            <div class="col-6">
              PayPal
            </div>
            </div>
          </div>
        </div>

        <b-form class="form-container">
            <div class="form-section">
              <span class="form-title-text"> e-mail </span>
              <b-form-input 
              class="form-input-style"
              placeholder="didi@fonzmusic.com"
              ></b-form-input>
            </div>

            <div class="form-section row">
              <div class="col-6">
                <span class="form-title-text"> first name </span>
                <b-form-input 
                class="form-input-style"
                placeholder="Diarmuid"
                ></b-form-input>
              </div>
              <div class="col-6">
                <span class="form-title-text"> last name </span>
                <b-form-input 
                class="form-input-style"
                placeholder="McGonagle"
                ></b-form-input>
              </div>            
            </div>
            
            <div class="form-section">
              <span class="form-title-text"> address </span>
              <b-form-input 
              class="form-input-style"
              placeholder="21 Cool Street, Dublin, Ireland"
              ></b-form-input>
            </div>

            <div>
              <div id='card-element'></div>
            </div>

            <div class="form-section">
              <b-form-checkbox
                style="padding-top: 10px;"
                class="form-title-text"
                id="consent-checkbox">
              i agree to fonz music's <a href="https://www.fonzmusic.com/"><span style="color: #ff9425;">privacy policy</span></a>
              </b-form-checkbox>
            </div>

        </b-form>
      </div>

      <div class="col-6">
        <div class="row checkout-info" style="border: solid 1px lightgrey; border-radius: 5px;">
          <div class="col-12">
            <c-image 
            :src="require('@/assets/images/CoasterPictures/coaster3.png')"
            />
          </div>
          <div class="col-12">
            <div> {{ getItemTitle }} </div>
            <div>
              {{ determineCurrencySymbol }}{{ getRetailPrice }}
            </div>
              <div>
                {{ determineCurrencySymbol }}{{ calculateSubtotalPrice }}
              </div>
          </div>
        </div>
        <div @click="testRoute()" class="row purchase-button">
          <div class="col-12">
            <span style="color: white;"> purchase </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { SectionTilesProps } from "@/utils/SectionProps.js";
import CImage from "@/components/elements/Image.vue";
const axios = require("axios");
import { Checkout } from "@/plugins/checkout.js";
console.log({ Checkout });
export default {
  name: "CCheckoutCoasters",
  components: {
    CImage,
  },
  data() {
    return {
      enteredpromo: false,
      packagePrice: 60,
      extraPackaging: false,
      addedPromoSuccess: false,
      promoValid: null,
      promoCode: "",
      totalPrice: 25,
      governmentTheft: 2,
      currentPackage: {
        quantity: 1,
        info: "fonz coaster",
        price: 28,
        retailPrice: 60,
        title: "fonz coaster",
        freeShipping: true,
        couponCode: null,
        couponAmount: 0,
      },
      packageId: "",
      freeShipping: false,
      addons: { shipping: {}, extraPackaging: {} },
      currentAnalyticsCart: {
        // For Google Analytics
        currency: "EUR",
        value: 0.0,
        items: [],
      },
      cart: {
        addons: [],
        coupon: "",
        currency: "eur",
        discount: 0,
        packageId: "",
        price: 0,
        quantity: 0,
        retailPrice: 0,
      },
    };
  },


  beforeMount() {
    this.getPricing();
  },

  beforeCreate() {},
  methods: {

    // loadStripeSDK
    // Inserts the Stripe JS header into the document
    // Enables use of Stripe Elements
    loadStripeSDK: (pk, version = "v3", callback) => {
      console.log("opening window");
      if (window.Stripe) {
        callback();
        return;
      }
      let e = document.createElement("script");
      e.src = `https://js.stripe.com/v3`;
      e.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(e);
      e.addEventListener("load", callback);
      console.log("finished loadSDK");
    },



    addPromoCode(promoCode) {
      const cartIdFromUser = localStorage.getItem("cartId");
      this.getCoupon(promoCode);
      promoCode = promoCode.toLowerCase()
      // communicate with API to add promo code to cart: GET /i/coupons/{couponId}
      var response;
      axios
        .put(`${this.$API_URL}/i/cart/coupon/${promoCode}`, {
          cartId: cartIdFromUser,
        })
        .then((resp) => {
          response = resp.data;
          this.addedPromoSuccess = true;
          localStorage.setItem("addedPromoSuccess", true);
          this.currentPackage.couponCode = promoCode;
          this.promoValid = true;
          this.enteredpromo = true;
        })
        .catch((error) => {
          console.log("did not add promo to cart");
          console.error(error);
          this.promoValid = false;
          this.enteredpromo = true;
        });
    },
    getCoupon(promoCode) {
      promoCode = promoCode.toLowerCase()
      axios
        .get(`${this.$API_URL}/i/cart/coupon/${promoCode}`)
        .then((resp) => {
          const data = resp.data;
          this.currentPackage.couponAmount = data.discount;

          // set the promo code
          this.currentPackage.couponCode = promoCode;
          localStorage.setItem("promoCode", promoCode);
        })
        .catch((error) => {
          console.error("invalid coupon code: " + error);
        });
    },

    addShippingCost() {
      // PUT /i/cart/coupon/{couponId}
      const cartIdFromUser = localStorage.getItem("cartId");
      var response;
      axios
        .put(`${this.$API_URL}/i/cart/addons/shipping`, {
          cartId: cartIdFromUser,
        })
        // add cartID to body
        .then((resp) => {
          response = resp.data;
          console.log("shipping cost: " + response);
        })
        .catch((error) => {
          console.error("shipping error: " + error);
        });
    },
    onSubmit(evt) {
      console.log("pressed update promo");
      evt.preventDefault();
      this.promoValid = !this.promoValid;
    },
    getTotalPrice() {
      var addonTotal = 0;
      if (this.currentPackage.couponCode != null) {
        addonTotal -= 5;
      }
      if (!this.currentPackage.freeShipping) {
        addonTotal += 3;
      }
      return this.currentPackage.price + addonTotal;
    },
    getPricing() {
      const packageId = localStorage.getItem("package");
      if (!packageId) this.$router.push("/buy");
      axios
        .get(`${this.$API_URL}/i/package/${packageId}/${this.currency}`)
        .then((resp) => {
          this.currentPackage.title = resp.data.title;
          this.currentPackage.quantity = resp.data.quantity;
          this.currentPackage.freeShipping = resp.data.freeShipping;
          this.showPricing = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getCart() {
      console.log("getting cart");
      var localCartId = localStorage.getItem("cartId");
      axios
        .get(`${this.$API_URL}/i/cart/${localCartId}`)
        .then((resp) => {
          var currentCard = resp.data;
          this.currentPackage.price = resp.data.price;
          this.currentPackage.retailPrice = resp.data.retailPrice;
          this.cart = currentCard;
          try {
            this.currentPackage.couponCode = resp.data.coupon;
            this.cart.coupon = resp.data.coupon;
          } catch (e) {
            console.log("no coupon");
          }
          
          if (localStorage.getItem("promoFromUrl") !== null) {
            console.log("inside here");
            this.currentPackage.couponCode = localStorage.getItem("promoFromUrl");
          } 
          console.log("outisde here");
          this.currentPackage.couponCode = this.currentPackage.couponCode.toLowerCase();
          console.log("coupon is " + this.currentPackage.couponCode);
          this.getCoupon(this.currentPackage.couponCode); // Check for coupon code and adjust subtotal if present

          // Update Analytics data payload
          this.currentAnalyticsCart = {
            currency: this.currency,
            value: currentCard.total,
            items: [this.cart],
          };
        })
        .catch((error) => {
          console.log("got cart error");
          console.error(error);
        });
    },

    sendCartIdToServer() {
      var localCartId = localStorage.getItem("cartId");
      console.log("local cart" + localCartId);
      axios
        .post("/i/checkout/payment-intent", {
          cartId: localCartId,
        })
        .then((resp) => {
          console.log("beginning on payment intent");
          localStorage.setItem("paymentIntent", resp.data.id);
        })
        .catch((error) => {
          console.log("fail making payment intent");
        });
    },
  },

  async mounted() {
    
    this.loadStripeSDK();
    this.getPricing();
    this.sendCartIdToServer();
    this.getCart();

    /* Google Analytics 👀 */
    // Begin Checkout Log 🤑
    firebase
      .analytics()
      .logEvent(
        firebase.analytics.EventName.BEGIN_CHECKOUT,
        this.currentAnalyticsCart
      );
      
    var self = this;

    localStorage.setItem("totalPrice", self.totalPrice);
    self.loadStripeSDK(this.pk, "v3", () => {
      const options = {
        stripeAccount: this.stripeAccount,
        apiVersion: "2020-08-27",
        locale: this.locale,
      };
      var country = localStorage.getItem("country");
      self.stripe = window.Stripe(
        "pk_live_51HCTMlKULAGg50zbqXd9cf5sIUrKrRwHQFBLbTLv56947KWQheJX3nXTNl6H8WTPzm6mVKYlEaYvLg2SyjGKBNio00T4W00Hap",
        options
      );
      // this creates payment req
      var localPaymentReq = self.stripe.paymentRequest({
        currency: self.currency,
        country: country,
        total: {
          label: "Fonz Coaster",
          amount: self.totalPrice * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      self.elements = self.stripe.elements();
      var prButton = self.elements.create("paymentRequestButton", {
        paymentRequest: localPaymentReq,
      });

      localPaymentReq.canMakePayment().then(function(result) {
        console.log("result is " + JSON.stringify(result));
        if (result) {
          console.log("mounting the button ");
          prButton.mount("#payment-request-button");
        } else {
          console.log("NOT mounting the button ");
          document.getElementById("payment-request-button").style.display =
            "none";
        }
      });

      prButton.on("click", function(ev) {
        console.log("updating payment");
        var passInPrice = localStorage.getItem("totalPrice");
        console.log("passed in price " + passInPrice);
        localPaymentReq.update({
          total: {
            label: "Fonz Coaster",
            amount: passInPrice * 100,
          },
        });
      });
      var orderSuccess;
      localPaymentReq.on("paymentmethod", function(ev) {
        console.log("running paymentMethod");
        var strope = window.Stripe(
          "pk_live_51HCTMlKULAGg50zbqXd9cf5sIUrKrRwHQFBLbTLv56947KWQheJX3nXTNl6H8WTPzm6mVKYlEaYvLg2SyjGKBNio00T4W00Hap"
        );
        var clientSecretLocal = localStorage.getItem("clientSecret");

        // Confirm the PaymentIntent without handling potential next actions (yet).
        strope
          .confirmCardPayment(
            clientSecretLocal,
            { payment_method: ev.paymentMethod.id },
            { handleActions: false }
          )
          .then(function(confirmResult) {
            if (confirmResult.error) {
              // Report to the browser that the payment failed, prompting it to
              // re-show the payment interface, or show an error message and close
              // the payment interface.
              orderSuccess = false;
              console.log("failed");
              console.log("error is " + JSON.stringify(confirmResult.error));
              ev.complete("fail");
              $router.push({ path: "/orderfailure" });
            } else {
              // Report to the browser that the confirmation was successful, prompting
              // it to close the browser payment method collection interface.
              console.log("sucess");
              console.log("resp is " + JSON.stringify(confirmResult));
              ev.complete("success");
              // Check if the PaymentIntent requires any actions and if so let Stripe.js
              // handle the flow. If using an API version older than "2019-02-11" instead
              // instead check for: `paymentIntent.status === "requires_source_action"`.
              if (confirmResult.paymentIntent.status === "requires_action") {
                console.log("needs action");
                // Let Stripe.js handle the rest of the payment flow.
                stripe.confirmCardPayment(clientSecret).then(function(result) {
                  if (result.error) {
                    orderSuccess = false;
                    self.$router.push({ path: "/orderfailure" });
                    // The payment failed -- ask your customer for a new payment method.
                  } else {
                    orderSuccess = true;
                    self.$router.push({ path: "/ordersuccess" });
                    // The payment has succeeded.
                  }
                });
              } else {
                console.log("great success");
                orderSuccess = true;
                self.$router.push({ path: "/ordersuccess" });
                // The payment has succeeded.
              }
            }
          });
      });
      console.log("orderSuccess var " + orderSuccess);
      if (orderSuccess) {
        self.$router.push({ path: "/ordersuccess" });
      }
    });
  },
  computed: {
    calculateTotalPrice() {
      var addonTotal = 0;
      if (this.determineAddDiscount) {
        addonTotal -= this.currentPackage.couponAmount;
      }
      if (!this.currentPackage.freeShipping) {
        addonTotal += 3;
      }
      this.totalPrice = this.currentPackage.price + addonTotal;
      localStorage.setItem("totalPrice", this.totalPrice);
      return this.currentPackage.price + addonTotal;
    },
    calculateSubtotalPrice() {
      if (this.determineAddDiscount)
        return this.currentPackage.price - this.currentPackage.couponAmount;
      else return this.currentPackage.price;
    },
    getPackageId() {
      return localStorage.getItem("package");
    },
    getImgUrl() {
      if (
        this.currentPackage.quantity == 1 ||
        this.currentPackage.quantity == 2 ||
        this.currentPackage.quantity == 3
      ) {
        return require("@/assets/images/CoasterPictures/coaster" +
          this.currentPackage.quantity +
          ".png");
      } else {
        return require("@/assets/images/CoasterPictures/coaster" + 3 + ".png");
      }
    },
    getItemTitle() {
      return this.currentPackage.title;
    },
    getItemInfo() {
      return this.currentPackage.info;
    },
    getRetailPrice() {
      return this.currentPackage.price;
    },
    determineShipping() {
      return this.currentPackage.freeShipping;
    },
    determineCurrencySymbol() {
      if (this.currency == "usd") return "$";
      else if (this.currency == "gbp") return "£";
      else return "€";
    },
    determineAddDiscount() {
      console.log("coupon: " + this.currentPackage.couponCode);
      if (this.addedPromoSuccess || this.currentPackage.couponCode != null) {
        return true;
      } else return false;
    },
  },
};
</script>


<style lang="css" scoped>
.checkout-page {
  max-width: 1000px;
  width: 80vw;
  padding-top: 160px;
}

.form-check-label {
  font-size: 10pt;
  vertical-align: top;
}
.coasterPackageImage {
  /* min-width: 50px;
  max-width: 500px; */
  /* width: 100%; */
  margin: 12px auto;
}
.btn-secondary {
  color: #b288b9;
  background-color: transparent;
  border: 0;
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
  margin: 5px;
}
.form-input-style {
  vertical-align: middle;
  font-size: 0.7rem;
  color: grey;
  padding-bottom: 10px;
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
  margin: 5px;
  text-align: center;
  border: solid 1px lightgrey; 
  border-radius: 5px; 
}
.purchase-button:hover {
  cursor: pointer;
}

.express-checkout {
  margin: 5px;
}
</style>
