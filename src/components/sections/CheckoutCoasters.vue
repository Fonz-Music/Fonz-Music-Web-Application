<template lang="html">
  <div class="container checkout-page">
    <h2 class="text-center">order summary</h2>
    <div class="row">
      <div class="col-lg-6">
        <c-image
          class="coasterPackageImage"
          :src="getImgUrl"
          alt="coaster package"
        />
      </div>
      <div class="col-lg-6">
        <div class=" row package-total-and-name">
          <div class="col-8 product-details">
            <h4 class="">{{ getItemTitle }}</h4>
            <!-- <p>{{ getItemInfo }}</p> -->
          </div>

          <div class="col-4 product-price">
            <div v-if="!promoValid">
              <h3 class="text-right">
                {{ determineCurrencySymbol }}{{ getRetailPrice }}
              </h3>
            </div>
            <div v-else>
              <h3 class="text-right">
                <del>{{ determineCurrencySymbol }}{{ getRetailPrice }}</del>
              </h3>
              <h3 class="text-right">
                {{ determineCurrencySymbol }}{{ calculateSubtotalPrice }}
              </h3>
            </div>
          </div>
        </div>
        <div class="checkbox-for-packaging">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="extraPackaging"
              value=""
              id="defaultCheck1"
              @click="updateExtraPackaging"
            />
            <label class="form-check-label" for="defaultCheck1">
              I want my coasters packaged separately
              {{ determineCurrencySymbol }}3
            </label>
          </div>
        </div>
        <br />
        <div class="promo-section">
          <p>Got a promo code from a friend?</p>

          <b-form inline class="row" @submit.stop.prevent="addPromoCode">
            <b-input
              type="promo"
              class="input-sm"
              id="inputPromo"
              v-model="promoCode"
            ></b-input>

            <b-button
              @click="addPromoCode(promoCode)"
              class="btn btn-sm btn-link col-3"
            >
              send it
            </b-button>
          </b-form>
          <p v-if="!promoValid && enteredpromo">that code is not valid</p>
          <p v-if="promoValid && enteredpromo">success, applied your coupon</p>
        </div>

        <div class="totalTable">
          <table class="table table-sm table-borderless">
            <tbody>
              <tr>
                <th scope="row">Subtotal</th>
                <td class="text-right">
                  {{ determineCurrencySymbol }}{{ this.currentPackage.price }}
                </td>
              </tr>
              <!-- <tr>
            <th scope="row">Government Theft (Tax)</th>
            <td>{{ this.currencySymbol }}{{ governmentTheft }}</td>
          </tr> -->
              <tr>
                <th scope="row">Shipping</th>
                <!-- <div v-if="determineShipping"> -->
                <td class="text-right" v-if="determineShipping">FREE</td>
                <!-- </div>
            <div v-else> -->
                <td class="text-right" v-else>
                  {{ determineCurrencySymbol }}3
                </td>
                <!-- </div> -->
              </tr>
              <tr v-if="addedPromoSuccess">
                <th scope="row">Discount</th>
                <td class="text-right discount-text">
                  {{ determineCurrencySymbol }}5
                </td>
              </tr>
              <tr v-if="extraPackaging">
                <th scope="row">Extra Packaging</th>
                <td class="text-right">{{ determineCurrencySymbol }}3</td>
              </tr>
              <tr class="total-amount">
                <th scope="row">Total</th>
                <td class="text-right">
                  {{ determineCurrencySymbol }}{{ calculateTotalPrice }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="paymentOptions text-center">
        <div id="payment-request-button" class="center-content"></div>

        <!-- <c-image
          class="applePay"
          :src="require('@/assets/images/buyWithApple.png')"
          alt="coaster package"
        />
        <br />
        <c-image
          class=""
          :src="require('@/assets/images/buyWithGoogle.png')"
          alt="coaster package"
        /> -->
      </div>
      <br />
      <div class="text-center">
        <router-link
          class="btn btn-link pay-with-credit"
          to="/paywithcreditcard/"
          >Credit / Debit Card</router-link
        >
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
    CImage
  },
  data() {
    return {
      enteredpromo: false,
      packagePrice: 60,
      // this checks to see if the user has added extra packaging
      extraPackaging: false,
      // tjos checks to see if the user has added a successful
      // promo. This is throughout the entire checkout process
      addedPromoSuccess: false,
      // this changes on each entered promo code
      promoValid: null,
      promoCode: "",
      totalPrice: 0,
      governmentTheft: 2,
      currentPackage: {
        quantity: 1,
        info: "fonz coaster",
        price: 22,
        retailPrice: 60,
        title: "fonz coaster",
        freeShipping: true
      },
      packageId: "",
      freeShipping: false,
      addons: { shipping: {}, extraPackaging: {} }
    };
  },
  beforeMount() {
    this.getPricing();
  },
  beforeCreate() {},
  methods: {
    addPromoCode(promoCode) {
      const cartIdFromUser = localStorage.getItem("cartId");

      // communicate with API to add promo code to cart
      // GET /i/coupons/{couponId}
      var response;
      axios
        .put(`${this.$API_URL}/i/cart/coupon/${promoCode}`, {
          cartId: cartIdFromUser
        })
        .then(resp => {
          response = resp.data;
          console.log(response);
          this.addedPromoSuccess = true;
          localStorage.setItem("addedPromoSuccess", true);

          this.promoValid = true;
          this.enteredpromo = true;
        })
        .catch(error => {
          console.error(error);
          this.promoValid = false;
          this.enteredpromo = true;
        });
    },
    addExtraPackaging() {
      // PUT /i/cart/coupon/{couponId}

      const cartIdFromUser = localStorage.getItem("cartId");
      var response;
      axios
        .put(`${this.$API_URL}/i/cart/addons/extraPackaging`, {
          cartId: cartIdFromUser
        })
        // add cartID to body
        .then(resp => {
          response = resp.data;
          console.log(response);
          localStorage.setItem("extraPackaging", true);
          this.extraPackaging = true;
        })
        .catch(error => {
          if (error.response.status == 403) {
            console.log("resp.status " + error.response.status);
            this.extraPackaging = true;
          }
          console.error(error);
        });
    },
    removeExtraPackaging() {
      // PUT /i/cart/coupon/{couponId}
      const cartIdFromUser = localStorage.getItem("cartId");
      console.log("inside remove cartid" + cartIdFromUser);
      var response;
      axios
        .delete(
          `${this.$API_URL}/i/cart/addons/extraPackaging/${cartIdFromUser}`
        )
        .then(resp => {
          // add cartID to body
          response = resp.data;
          console.log(response);
          this.extraPackaging = false;
          localStorage.setItem("extraPackaging", false);
        })
        .catch(error => {
          console.error(error);
        });
    },
    addShippingCost() {
      // PUT /i/cart/coupon/{couponId}
      const cartIdFromUser = localStorage.getItem("cartId");
      var response;
      axios
        .put(`${this.$API_URL}/i/cart/addons/shipping`, {
          cartId: cartIdFromUser
        })
        // add cartID to body
        .then(resp => {
          response = resp.data;
          console.log("shipping cost: " + response);
        })
        .catch(error => {
          console.error("shipping error: " + error);
        });
    },
    onSubmit(evt) {
      console.log("pressed update promo");
      evt.preventDefault();
      this.promoValid = !this.promoValid;
    },
    updateExtraPackaging() {
      console.log("pressed update extra packaging");
      // tell api that you must add packaging fee
      console.log({ ep: this.extraPackaging.length });
      if (!this.extraPackaging) {
        console.log("adding extra package cost");
        console.log("extra packaging var " + this.extraPackaging);
        localStorage.setItem("addedExtraPackaging", true);
        this.addExtraPackaging();
      } else {
        console.log("removing extra package cost");
        console.log("extra packaging var " + this.extraPackaging);
        localStorage.setItem("addedExtraPackaging", false);
        this.removeExtraPackaging();
      }
    },
    getPricing() {
      const packageId = localStorage.getItem("package");
      axios
        .get(`${this.$API_URL}/i/package/${packageId}/${this.currency}`)
        .then(resp => {
          this.currentPackage = resp.data;
          console.log(this.currentPackage);
          this.showPricing = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    // for apple pay
    loadStripeSdk: (pk, version = "v3", callback) => {
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
    sendCartIdToServer() {
      // const addressIntent = localStorage.getItem("guestAddress");
      // const emailIntent = localStorage.getItem("guestEmail");
      // const nameIntent = localStorage.getItem("guestName");
      var localCartId = localStorage.getItem("cartId");
      console.log("getting card ");
      console.log("local cart" + localCartId);
      // console.log("guestAddress: " + addressIntent);
      axios
        .post("/i/checkout/payment-intent", {
          cartId: localCartId
          // shipping: { address: { line1: addressIntent }, name: nameIntent },
          // receipt_email: emailIntent
        })
        .then(resp => {
          console.log("beginning on payment intent");
          // alert(JSON.stringify(resp, null, 4));
          localStorage.setItem("clientSecret", resp.data.client_secret);
          // this.clientSecret = resp.data.client_secret;
          // alert(JSON.stringify(resp.data, null, 4));
          // console.log("resp data " + resp.data);
        })
        .catch(error => {
          console.log("fail making payment intent");
        });
    }
  },

  async mounted() {
    this.getPricing();
    this.loadStripeSdk(this.pk, "v3", () => {
      const options = {
        stripeAccount: this.stripeAccount,
        apiVersion: "2020-08-27",
        locale: this.locale
      };
      var country = localStorage.getItem("country");
      this.stripe = window.Stripe(
        "pk_test_51HCTMlKULAGg50zbqiZBDhXIYS79K3eHv4atQn6LNjskaB3Q288Hm0JUYcT1ZN6MtFOoWp5IGCHkWtVZneQnGU0j00iR6NFvqU",
        options
      );
      // this creates payment req
      var localPaymentReq = this.stripe.paymentRequest({
        currency: this.currency,
        country: country,
        total: {
          label: "Fonz Coaster",
          amount: this.currentPackage.price * 100
        },
        requestPayerName: true,
        requestPayerEmail: true
      });
      console.log(localPaymentReq);

      this.elements = this.stripe.elements();
      var prButton = this.elements.create("paymentRequestButton", {
        paymentRequest: localPaymentReq
      });

      localPaymentReq.canMakePayment().then(function(result) {
        console.log("result is " + JSON.stringify(result));
        if (result) {
          //   console.log("mounting the button ");
          // this.card.mount("#payment-request-button");
          prButton.mount("#payment-request-button");
        } else {
          console.log("NOT mounting the button ");
          document.getElementById("payment-request-button").style.display =
            "none";
        }
      });

      localPaymentReq.on("paymentmethod", function(ev) {
        // this.stripe.paymentIntents.update(clientSecretLocal);

        this.stripe.paymentRequest.update({
          total: {
            label: "Fonz Coaster for you",
            amount: this.totalPrice * 100
          }
        });
        this.sendCartIdToServer();
        var clientSecretLocal = localStorage.getItem("clientSecret");

        // Confirm the PaymentIntent without handling potential next actions (yet).
        stripe
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
              ev.complete("fail");
            } else {
              // Report to the browser that the confirmation was successful, prompting
              // it to close the browser payment method collection interface.
              ev.complete("success");
              // Check if the PaymentIntent requires any actions and if so let Stripe.js
              // handle the flow. If using an API version older than "2019-02-11" instead
              // instead check for: `paymentIntent.status === "requires_source_action"`.
              if (confirmResult.paymentIntent.status === "requires_action") {
                // Let Stripe.js handle the rest of the payment flow.
                stripe.confirmCardPayment(clientSecret).then(function(result) {
                  if (result.error) {
                    // The payment failed -- ask your customer for a new payment method.
                  } else {
                    // The payment has succeeded.
                  }
                });
              } else {
                // The payment has succeeded.
              }
            }
          });
      });
    });
  },
  computed: {
    calculateTotalPrice() {
      var addonTotal = 0;
      if (this.promoValid) {
        addonTotal -= 5;
      }
      if (!this.currentPackage.freeShipping) {
        addonTotal += 3;
      }
      if (this.extraPackaging) {
        addonTotal += 3;
      }
      this.totalPrice = this.currentPackage.price + addonTotal;
      return this.currentPackage.price + addonTotal;
    },
    calculateSubtotalPrice() {
      if (this.promoValid) return this.currentPackage.price - 5;
      else return this.currentPackage.price;
    },
    getPackageId() {
      return localStorage.getItem("package");
      // console.log("packageID " + this.packageID);
    },
    getImgUrl() {
      // console.log({ pricePlans: this.pricePlans, other: "idk", plan })
      return require("@/assets/images/coaster" +
        this.currentPackage.quantity +
        ".png");
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
      // console.log("this cur " + this.currency);
      if (this.currency == "usd") return "$";
      else if (this.currency == "gbp") return "£";
      else return "€";
    },
    determineAddDiscount() {
      var addPromoFromLocal = localStorage.getItem("addedPromoSuccess");
      console.log("promo from local" + addPromoFromLocal);
      if (addPromoFromLocal == true) {
        console.log("returning true ");
        return true;
      } else {
        console.log("returning false");
        return false;
      }
    },
    determineExtraPacking() {
      var extraPackingFromLocal = localStorage.getItem("extraPackaging");
      console.log("packing from local " + extraPackingFromLocal);
      console.log(typeof extraPackingFromLocal);
      if (extraPackingFromLocal == "true") {
        console.log("returning true ");
        return true;
      } else {
        console.log("returning false");
        return false;
      }
    }
  }
};
</script>

<style lang="css" scoped>
.checkout-page {
  max-width: 900px;
  width: 80vw;
  padding-top: 160px;
}
.logoWordmark {
  margin: 10px auto;
  width: 25%;
  max-width: 150px;
}
.checkout-page h2,
.checkout-page h3 {
  margin: 0px;
}
.form-check-label {
  font-size: 10pt;
  vertical-align: top;
}
.coasterPackageImage {
  /* min-width: 50px;
  max-width: 500px; */
  /* width: 100%; */
  margin: 30px auto;
}
.btn-secondary {
  color: #b288b9;
  background-color: transparent;
  border: 0;
}
.product-details p {
  font-size: 10pt;
}
.product-details h4 {
  font-size: 12pt;
  margin: 0px 0px 0px 0px;
}
.product-price h3 {
  margin: 0px 0px 0px 0px;
}
.pack-separate {
  font-size: 16px;
}
.discount-text {
  color: red;
}
.form-group {
  font-size: 16px;
}
#inputPromo {
  margin-left: 15px;
  color: grey;
  height: 35px;
}
table {
  color: grey;
  /* border-collapse: collapse; */
}
th {
  font-weight: 400;
}
.total-amount th,
.total-amount td {
  border-bottom: hidden;
}
.paymentOptions {
  margin: 0 auto;
  max-width: 300px;
  width: 75%;
}
.pay-with-credit {
  font-size: 12pt;
}
</style>
