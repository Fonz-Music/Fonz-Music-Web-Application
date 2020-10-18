<template lang="html">
  <div class="container checkout-page">
    <div class="topLogo">
      <router-link to="/">
        <c-image
          class="logoWordmark"
          :src="require('@/assets/images/fonzLogoWordmarkWhite.svg')"
          alt="Neon"
        />
      </router-link>
    </div>
    <h3 class="text-left">Order Summary</h3>
    <div class="row">
      <div class="col-3">
        <c-image
          class="coasterPackageImage"
          :src="getImgUrl(getPackageId)"
          alt="coaster package"
        />
      </div>

      <div class="col-6 product-details">
        <h4 class="">{{ getItemTitle(getPackageId) }}</h4>
        <p>{{ getItemInfo(getPackageId) }}</p>
      </div>

      <div class="col-3 product-price">
        <div v-if="!promoValid">
          <h3 class="text-right">${{ getRetailPrice(getPackageId) }}</h3>
        </div>
        <div v-else>
          <h3 class="text-right">
            <del>${{ getRetailPrice(getPackageId) }}</del>
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

    <div class="totalTable">
      <table class="table table-sm table-borderless">
        <tbody>
          <tr>
            <th scope="row">Subtotal</th>
            <td>${{ calculateSubtotalPrice }}</td>
          </tr>
          <tr>
            <th scope="row">Government Theft (Tax)</th>
            <td>${{ governmentTheft }}</td>
          </tr>
          <tr>
            <th scope="row">Shipping</th>
            <td>FREE</td>
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
      promoCode: "",
      totalPrice: 0,
      governmentTheft: 2,
      currentPackage: {
        SKU: "11111111",
        price: 27,
        thumbnail: "coaster1.png",
        title: "Fonz Coaster",
        information: "One coaster to connect to the Fonz App",
        packagedSeperately: false
      },
      packageId: "",
      showPricing: false,
      currencySymbol: "€",
      pricePlans: [{}, {}, {}, {}, {}],
      addons: { shipping: {}, extraPackaging: {} }
    };
  },
  methods: {
    addPromoCode() {
      // communicate with API to add promo code to cart
    },

    // change to getIMGURL
    getImgUrl(plan) {
      return require("@/assets/images/coaster" +
        this.pricePlans[plans].quantity +
        ".png");
    },
    getItemTitle(plan) {
      return this.pricePlans[plans].title;
    },
    getItemInfo(plan) {
      return this.pricePlans[plans].info;
    },
    onSubmit(evt) {
      console.log("pressed update promo");
      evt.preventDefault();
      this.promoValid = !promoValid;
    },
    updatePromo() {
      console.log("pressed update promo");
      this.promoValid = !this.promoValid;
    },
    getRetailPrice(plan) {
      return (
        this.pricePlans[plan].retailPrice / this.pricePlans[plan].quantity
      ).toFixed(2);
    },
    perItemPrice(plan) {
      return (
        this.pricePlans[plan].price / this.pricePlans[plan].quantity
      ).toFixed(2);
    },
    updatePackage(plan) {
      let packageId = this.pricePlans[plan].package;
      localStorage.setItem("package", packageId);
      this.$router.push("/checkout");
    },
    getPricing() {
      axios
        .get(`${this.$API_URL}/i/prices/${this.currency}`)
        .then(resp => {
          const coasterPricing = resp.data.coasters;
          coasterPricing.forEach((price, key) => {
            this.pricePlans[key] = { ...price, key };
          });
          this.addons = resp.data.addons;
          this.showPricing = true;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },

  beforeMount() {
    this.getPricing();
  },
  beforeCreate() {
    // this.getPricing();
  },
  mounted() {
    // this.getPricing();
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
        this.totalPrice = this.currentPackage.price - 5 + this.governmentTheft;
        return this.totalPrice;
      } else {
        this.totalPrice = this.currentPackage.price + this.governmentTheft;
        return this.totalPrice;
      }
    },
    calculateSubtotalPrice() {
      if (this.promoValid) return this.currentPackage.price - 5;
      else return this.currentPackage.price;
    },
    getPackageId() {
      return localStorage.getItem("package");
      // console.log("packageID " + this.packageID);
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
}
table {
  color: white;
}
.paymentOptions {
  margin: 0 auto;
  max-width: 300px;
  width: 75%;
}
</style>
