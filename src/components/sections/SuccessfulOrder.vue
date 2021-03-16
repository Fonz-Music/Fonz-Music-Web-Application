<template lang="html">
  <div class="container checkout-page">
    <h2 class="text-center order-placed-heading">
      your order has been placed!
    </h2>
    <div class="row">
      <div class="col-lg-6">
        <div class="">
          <c-image
            class="coasterPackageImage"
            :src="getImgUrl"
            alt="coaster package"
          />
        </div>
      </div>

      <div class="orderReviewTable col-lg-6">
        <div class=" row package-total-and-name">
          <div class="col-8 product-details">
            <h4 class="bundle-title center-content">{{ getItemTitle }}</h4>
            <p class="bundle-text center-content">bundle</p>
          </div>

          <div class="col-4 product-price">
            <h3 class="text-right">
              {{ determineCurrencySymbol }}{{ calculateTotalPrice }}
            </h3>
          </div>
        </div>
        <div class="orderReviewTable">
          <table class="table table-sm table-borderless">
            <tbody>
              <tr>
                <th scope="row">Order Name</th>
                <td class="text-right">
                  {{ this.orderName }}
                </td>
              </tr>
              <tr>
                <th scope="row">E-mail</th>
                <td class="text-right">{{ this.email }}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td class="text-right">
                  {{ this.address.replace(/['"]+/g, "") }}
                </td>
              </tr>
              <tr v-if="determineShipping">
                <th scope="row">Delivery</th>
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
    </div>
    <div class="after-order-details center-content">
      <p>You&apos;ll get email updates about the status of your order.</p>
      <p class="follow-our-socials">
        While you&apos;re waiting to be the party&apos;s favorite host, checkout
        our socials to follow our story, participate in giveaways, &amp;
        discover new tunes!
      </p>
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
      email: localStorage.getItem("guestEmail"),
      address: localStorage.getItem("guestAddress"),
      packagePrice: localStorage.getItem("totalPrice"),
      extraPackaging: localStorage.getItem("addedExtraPackaging"),
      orderName: localStorage.getItem("guestName"),
      // addedPromo: localStorage.getItem("addedPromoSuccess"),
      promoCode: "",
      totalPrice: 0,
      governmentTheft: 2,
      currentPackage: {
        quantity: 1,
        info: "fonz coaster",
        price: 22,
        retailPrice: 60,
        title: "fonz coaster",
        freeShipping: true,
        couponCode: null
      },
      packageId: "",
      showPricing: false,
      currencySymbol: "€",
      addons: { shipping: {}, extraPackaging: {} }
    };
  },
  beforeMount() {
    this.getPricing();
    this.getCart();


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
    getPricing() {
      const packageId = localStorage.getItem("package");
      axios
        .get(`${this.$API_URL}/i/package/${packageId}/${this.currency}`)
        .then(resp => {
          // this.currentPackage = resp.data;
          this.currentPackage.title = resp.data.title;
          this.currentPackage.quantity = resp.data.quantity;
          this.currentPackage.freeShipping = resp.data.freeShipping;
          // console.log(this.currentPackage);
          this.showPricing = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getCart() {
      console.log("getting cart");
      // const packageId = localStorage.getItem("package");
      fbq('track', 'Purchase', { value: this.currentPackage.price, currency: this.currency });


      var localCartId = localStorage.getItem("cartId");
      axios
        .get(`${this.$API_URL}/i/cart/${localCartId}`)
        .then(resp => {
          console.log("got cart");
          var currentCard = resp.data;
          this.currentPackage.price = resp.data.price;
          this.currentPackage.retailPrice = resp.data.retailPrice;
          try {
            console.log("added coupon " + resp.data.coupon);
            this.currentPackage.couponCode = resp.data.coupon;
            console.log("added coupon " + this.currentPackage.couponCode);
          } catch (e) {
            console.log("no coupon");
          }
          console.log(currentCard);
          // this.showPricing = true;
        })
        .catch(error => {
          console.log("got cart error");
          console.error(error);
        });
    }
  },

  mounted() {
    this.getPricing();
  },
  computed: {
    calculateTotalPrice() {
      var addonTotal = 0;
      if (this.determineAddDiscount) {
        addonTotal -= 5;
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
      if (this.determineAddDiscount) return this.currentPackage.price - 5;
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
    getRetailPrice() {
      return this.currentPackage.price;
    },
    determineShipping() {
      if (this.currentPackage.quantity == 1) {
        return true;
      } else return false;
    },
    determineCurrencySymbol() {
      // console.log("this cur " + this.currency);
      if (this.currency == "usd") return "$";
      else if (this.currency == "gbp") return "£";
      else return "€";
    },
    determineAddDiscount() {
      console.log("coupon: " + this.currentPackage.couponCode);
      if (this.currentPackage.couponCode != null) {
        return true;
      } else return false;
    }
  }
};
</script>

<style lang="css" scoped>
.checkout-page {
  max-width: 900px;
  width: 80vw;
  padding-top: 100px;
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
.order-placed-heading {
  padding: 50px;
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
.coasterPackageImage {
  /* min-width: 50px;
  max-width: 500px; */
  /* width: 100%; */
  margin: 0px auto;
}
.btn-secondary {
  color: #b288b9;
  background-color: transparent;
  border: 0;
}

.product-details h4 {
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
.follow-our-socials {
  max-width: 650px;
  margin: 0 auto;
}
</style>
