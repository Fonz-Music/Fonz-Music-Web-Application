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
            <h4 class="bundle-title center-content">{{ getItemTitle }}</h4>
            <p class="bundle-text center-content">bundle</p>
            <!-- <p>{{ getItemInfo }}</p> -->
          </div>

          <div class="col-4 product-price">
            <div v-if="!determineAddDiscount">
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
        <div class="promo-section">
          <p>got a promo code from a friend?</p>

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
              <tr v-if="determineAddDiscount">
                <th scope="row">Discount</th>
                <td class="text-right discount-text">
                  {{ determineCurrencySymbol }}
                  {{ currentPackage.couponAmount }}
                </td>
              </tr>
              <!-- <tr v-if="extraPackaging">
                <th scope="row">Extra Packaging</th>
                <td class="text-right">{{ determineCurrencySymbol }}3</td>
              </tr> -->
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

      <br />
    </div>
    <div class="paymentOptions text-center">
      <div id="payment-request-button" class="center-content"></div>
    </div>
    <div class="text-center">
      <b-button class="submitButton">
        <router-link
          class="btn btn-link pay-with-credit"
          to="/paywithcreditcard/"
          >Credit / Debit Card</router-link
        >
      </b-button>
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
      // this checks to see if the user has added extra packaging
      extraPackaging: false,
      // tjos checks to see if the user has added a successful
      // promo. This is throughout the entire checkout process
      addedPromoSuccess: false,
      // this changes on each entered promo code
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
    };
  },
  beforeMount() {
    this.getPricing();
  },
  beforeCreate() {},
  methods: {
    addPromoCode(promoCode) {
      const cartIdFromUser = localStorage.getItem("cartId");
      this.getCoupon(promoCode);
      
      // console.log("the promo is " + promoCode);

      console.log("adding promo, code was " + promoCode);
      // communicate with API to add promo code to cart
      // GET /i/coupons/{couponId}
      var response;
      axios
        .put(`${this.$API_URL}/i/cart/coupon/${promoCode}`, {
          cartId: cartIdFromUser,
        })
        .then((resp) => {
          console.log(" added promo to cart ");
          response = resp.data;
          console.log(response);
          this.addedPromoSuccess = true;
          localStorage.setItem("addedPromoSuccess", true);
          this.currentPackage.couponCode = promoCode
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
      axios
        // .get(`${this.$API_URL}/i/cart/coupon/${this.currentPackage.couponCode}`)
        .get(`${this.$API_URL}/i/cart/coupon/${promoCode}`)
        .then((resp) => {
          const data = resp.data;
          // data = {"active":true,"discount":"10","affiliateId":"David2020","discountType":"constant","affiliateCut":0.2}
          this.currentPackage.couponAmount = data.discount;
          // set the promo code 
          this.currentPackage.couponCode = promoCode
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
      // if (this.extraPackaging) {
      //   addonTotal += 3;
      // }
      // this.totalPrice = this.currentPackage.price + addonTotal;
      return this.currentPackage.price + addonTotal;
    },
    getPricing() {
      const packageId = localStorage.getItem("package");
      if(!packageId) this.$router.push('/buy')
      axios
        .get(`${this.$API_URL}/i/package/${packageId}/${this.currency}`)
        .then((resp) => {
          // this.currentPackage = resp.data;
          
          this.currentPackage.title = resp.data.title;
          this.currentPackage.quantity = resp.data.quantity;
          this.currentPackage.freeShipping = resp.data.freeShipping;
          // console.log(this.currentPackage);
          this.showPricing = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getCart() {
      console.log("getting cart");
      // const packageId = localStorage.getItem("package");
      var localCartId = localStorage.getItem("cartId");
      axios
        .get(`${this.$API_URL}/i/cart/${localCartId}`)
        .then((resp) => {
          console.log("got cart");
          var currentCard = resp.data;
          // console.log("cart: " + currentCard);
          this.currentPackage.price = resp.data.price;
          this.currentPackage.retailPrice = resp.data.retailPrice;
          try {
            console.log("added coupon " + resp.data.coupon);
            this.currentPackage.couponCode = resp.data.coupon;
            console.log("added coupon " + this.currentPackage.couponCode);
          } catch (e) {
            console.log("no coupon");
          }
          this.getCoupon(this.currentPackage.couponCode); // Check for coupon code and adjust subtotal if present
          console.log(currentCard);
          // this.showPricing = true;
        })
        .catch((error) => {
          console.log("got cart error");
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
      // console.log("getting card ");
      console.log("local cart" + localCartId);
      // console.log("guestAddress: " + addressIntent);
      axios
        .post("/i/checkout/payment-intent", {
          cartId: localCartId,
          // shipping: { address: { line1: addressIntent }, name: nameIntent },
          // receipt_email: emailIntent
        })
        .then((resp) => {
          console.log("beginning on payment intent");
          // alert(JSON.stringify(resp, null, 4));
          localStorage.setItem("paymentIntent", resp.data.id);
          // this.clientSecret = resp.data.client_secret;
          // alert(JSON.stringify(resp.data, null, 4));
          // console.log("resp data " + resp.data);
        })
        .catch((error) => {
          console.log("fail making payment intent");
        });
    },
  },

  async mounted() {
    this.getPricing();
    this.sendCartIdToServer();
    this.getCart();

    localStorage.setItem("totalPrice", this.totalPrice);
    this.loadStripeSdk(this.pk, "v3", () => {
      const options = {
        stripeAccount: this.stripeAccount,
        apiVersion: "2020-08-27",
        locale: this.locale,
      };
      var country = localStorage.getItem("country");
      this.stripe = window.Stripe(
        "pk_live_51HCTMlKULAGg50zbqXd9cf5sIUrKrRwHQFBLbTLv56947KWQheJX3nXTNl6H8WTPzm6mVKYlEaYvLg2SyjGKBNio00T4W00Hap",
        options
      );
      // this creates payment req
      var localPaymentReq = this.stripe.paymentRequest({
        currency: this.currency,
        country: country,
        total: {
          label: "Fonz Coaster",
          amount: this.totalPrice * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });
      // console.log(localPaymentReq);

      this.elements = this.stripe.elements();
      var prButton = this.elements.create("paymentRequestButton", {
        paymentRequest: localPaymentReq,
      });

      localPaymentReq.canMakePayment().then(function(result) {
        console.log("result is " + JSON.stringify(result));
        if (result) {
          console.log("mounting the button ");
          // this.card.mount("#payment-request-button");
          prButton.mount("#payment-request-button");
        } else {
          console.log("NOT mounting the button ");
          document.getElementById("payment-request-button").style.display =
            "none";
        }
      });

      prButton.on("click", function(ev) {
        // this.stripe.paymentIntents.update(clientSecretLocal);
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
        // this.stripe.paymentIntents.update(clientSecretLocal);
        // const options = {
        //   stripeAccount: this.stripeAccount,
        //   apiVersion: "2020-08-27",
        //   locale: this.locale
        // };
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
                    this.$router.push({ path: "/orderfailure" });
                    // The payment failed -- ask your customer for a new payment method.
                  } else {
                    orderSuccess = true;
                    this.$router.push({ path: "/ordersuccess" });
                    // The payment has succeeded.
                  }
                });
              } else {
                console.log("great success");
                orderSuccess = true;
                this.$router.push({ path: "/ordersuccess" });
                // The payment has succeeded.
              }
            }
          });
      });
      console.log("orderSuccess var " + orderSuccess);
      if (orderSuccess) {
        this.$router.push({ path: "/ordersuccess" });
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
      // if (this.extraPackaging) {
      //   addonTotal += 3;
      // }
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
      // console.log("packageID " + this.packageID);
    },
    getImgUrl() {
      // console.log({ pricePlans: this.pricePlans, other: "idk", plan })
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
      // console.log("this cur " + this.currency);
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
.bundle-title {
  color: #b188b9;
  font-family: "MuseoSans500" !important;
  font-size: 34px;
  margin-bottom: 0;
}
.bundle-text p {
  padding: 0;
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
.product-details p {
  /* font-size: 10pt; */
}
.product-details h4 {
  /* font-size: 12pt; */
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
</style>
