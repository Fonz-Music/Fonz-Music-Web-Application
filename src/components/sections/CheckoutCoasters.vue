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
                {{ this.currencySymbol }}{{ getRetailPrice }}
              </h3>
            </div>
            <div v-else>
              <h3 class="text-right">
                <del>{{ this.currencySymbol }}{{ getRetailPrice }}</del>
              </h3>
              <h3 class="text-right">
                {{ this.currencySymbol }}{{ calculateSubtotalPrice }}
              </h3>
            </div>
          </div>
        </div>
        <div class="checkbox-for-packaging">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              @click="updateExtraPackaging"
            />
            <label class="form-check-label" for="defaultCheck1">
              I want my coasters packaged separately {{ this.currencySymbol }}3
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
              type="submit"
              class="btn btn-sm btn-link col-3"
            >
              send it
            </b-button>
          </b-form>
          <p v-if="!promoValid && enteredpromo">that code is not valid</p>
        </div>

        <div class="totalTable">
          <table class="table table-sm table-borderless">
            <tbody>
              <tr>
                <th scope="row">Subtotal</th>
                <td class="text-right">
                  {{ this.currencySymbol }}{{ this.currentPackage.price }}
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
                <td class="text-right" v-else>{{ this.currencySymbol }}3</td>
                <!-- </div> -->
              </tr>
              <tr v-if="promoValid">
                <th scope="row">Discount</th>
                <td class="text-right discount-text">
                  {{ this.currencySymbol }}5
                </td>
              </tr>
              <tr v-if="extraPackaging">
                <th scope="row">Extra Packaging</th>
                <td class="text-right">{{ this.currencySymbol }}3</td>
              </tr>
              <tr class="total-amount">
                <th scope="row">Total</th>
                <td class="text-right">
                  {{ this.currencySymbol }}{{ calculateTotalPrice }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="paymentOptions text-center">
        <c-image
          class="applePay"
          :src="require('@/assets/images/buyWithApple.png')"
          alt="coaster package"
        />
        <br />
        <c-image
          class=""
          :src="require('@/assets/images/buyWithGoogle.png')"
          alt="coaster package"
        />
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
      promoValid: null,
      enteredpromo: false,
      packagePrice: 60,
      extraPackaging: false,
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
      showPricing: false,
      currencySymbol: "€",
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
      this.enteredpromo = true;
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

          this.promoValid = true;
        })
        .catch(error => {
          console.error(error);
          this.promoValid = false;
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
        .delete(`${this.$API_URL}/i/cart/addons/extraPackaging`, {
          data: { cartId: cartIdFromUser }
        })
        // add cartID to body
        .then(resp => {
          response = resp.data;
          console.log(response);
          this.extraPackaging = false;
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
      if (!this.extraPackaging) {
        console.log("adding extra package cost");
        console.log("extra packaging var " + this.extraPackaging);
        this.addExtraPackaging();
      } else {
        console.log("removing extra package cost");
        console.log("extra packaging var " + this.extraPackaging);
        this.removeExtraPackaging();
      }
    },

    // perItemPrice(plan) {
    //   return (
    //     this.pricePlans[plan].price / this.pricePlans[plan].quantity
    //   ).toFixed(2);
    // },
    // updatePackage(plan) {
    //   let packageId = this.pricePlans[plan].package;
    //   localStorage.setItem("package", packageId);
    //   this.$router.push("/checkout");
    // },
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
      // if a single coaster, add shipping cost
      if (this.currentPackage.quantity == 1) {
        this.addShippingCost();
      }
    }
  },

  mounted() {
    this.getPricing();
    // if (this.pricingSlider) {
    //   this.$refs.slider.setAttribute("min", 0);
    //   this.$refs.slider.setAttribute(
    //     "max",
    //     Object.keys(this.priceInput).length - 1
    //   );
    //   this.thumbSize = parseInt(
    //     window
    //       .getComputedStyle(this.$refs.sliderValue)
    //       .getPropertyValue("--thumb-size"),
    //     10
    //   );
    //   this.handleSliderValuePosition(this.$refs.slider);
    // }
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
