<template lang="html">
  <div class="container checkout-page">
    <div class="topLogo">
      <router-link to="/">
        <c-image
          class="logoWordmark"
          :src="require('@/assets/images/fonzLogoWordmarkBlack.svg')"
          alt="Neon"
        />
      </router-link>
    </div>
    <h3 class="text-left">Order Summary</h3>
    <div class="row">
      <div class="col-3">
        <c-image
          class="coasterPackageImage"
          :src="getImgUrl"
          alt="coaster package"
        />
      </div>

      <div class="col-6 product-details">
        <h4 class="">{{ getItemTitle }}</h4>
        <p>{{ getItemInfo }}</p>
      </div>

      <div class="col-3 product-price">
        <div v-if="!promoValid">
          <h3 class="text-right">${{ getRetailPrice }}</h3>
        </div>
        <div v-else>
          <h3 class="text-right">
            <del>${{ getRetailPrice }}</del>
          </h3>
          <h3 class="text-right">${{ calculateSubtotalPrice }}</h3>
        </div>
      </div>
    </div>
    <div class="text-center">
      <b-button class="btn btn-center btn-link pack-separate">
        I want my coasters packaged SEPARATELY
      </b-button>
    </div>
    <br />
    <!-- <div class="promo-section">
      <p>Got a promo code from a friend?</p>

      <b-form inline class="form-group row" @submit.stop.prevent="addPromoCode">
        <b-input
          type="promo"
          class="form-control input-sm col-8"
          id="inputPromo"
          v-model="promoCode"
        ></b-input>

        <b-button
          @click="updatePromo"
          type="submit" 
          class="btn btn-sm btn-link col-3"
        >
          send it
        </b-button>
      </b-form>
    </div> -->

    <div class="totalTable">
      <table class="table table-sm table-borderless">
        <tbody>
          <tr>
            <th scope="row">Subtotal</th>
            <td>${{ calculateSubtotalPrice }}</td>
          </tr>
          <!-- <tr>
            <th scope="row">Government Theft (Tax)</th>
            <td>${{ governmentTheft }}</td>
          </tr> -->
          <tr>
            <th scope="row">Shipping</th>
            <!-- <div v-if="determineShipping"> -->
            <td v-if="determineShipping">FREE</td>
            <!-- </div>
            <div v-else> -->
            <td v-else>$3</td>
            <!-- </div> -->
          </tr>
          <tr v-if="promoValid">
            <th scope="row">Discount</th>
            <td>$5</td>
          </tr>
          <th scope="row">Total</th>
          <td>${{ calculateTotalPrice }}</td>
        </tbody>
      </table>
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
      <router-link class="btn btn-link" to="/paywithcreditcard/"
        >or checkout with Credit Card</router-link
      >
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
      promoValid: false,
      packagePrice: 60,
      shippingFree: true,
      promoCode: "",
      totalPrice: 0,
      governmentTheft: 2,
      currentPackage: {
        quantity: 1,
        info: "fonz coaster",
        price: 22,
        retailPrice: 60,
        title: "fonz coaster"
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
    // addPromoCode() {
    //   // communicate with API to add promo code to cart
    //   // GET /i/coupons/{couponId}
    //   if (couponId == VALID) {
    //     // PUT /i/cart/coupon/{couponId}
    //   }
    // },
    // addAddon() {
    //   // GET /i/addons/{addonsId}
    //   if (addonId == VALID) {
    //     // PUT /i/cart/coupon/{couponId}
    //   }
    // },
    // change to getIMGURL

    onSubmit(evt) {
      console.log("pressed update promo");
      evt.preventDefault();
      this.promoValid = !this.promoValid;
    },
    updatePromo() {
      console.log("pressed update promo");
      this.promoValid = !this.promoValid;
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
      if (this.promoValid) {
        this.currentPackage.price = this.currentPackage.price - 5;
        return this.currentPackage.price;
      } else {
        return this.currentPackage.price;
      }
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
      if (this.currentPackage.quantity == 1) return false;
      else return true;
    }
  }
};
</script>

<style lang="css" scoped>
.checkout-page {
  max-width: 900px;
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
.coasterPackageImage {
  /* min-width: 50px;
  max-width: 500px; */
  /* width: 100%; */
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
.form-group {
  font-size: 16px;
}
#inputPromo {
  margin-left: 15px;
  color: grey;
}
table {
  color: grey;
  /* border-collapse: collapse; */
}
.paymentOptions {
  margin: 0 auto;
  max-width: 300px;
  width: 75%;
}
</style>
