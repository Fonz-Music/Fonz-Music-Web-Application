<template lang="html">
  <div class="container checkout-page">
    <h2 class="text-center order-placed-heading">
      order placed!
    </h2>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div>
          <c-image
          :src="require('@/assets/images/CoasterPictures/coasterTransparent2.png')"
          />
        </div>
      </div>

      <div class="orderReviewTable col-md-6 col-sm-12">
        <div class=" row package-total-and-name">
          <div class="col-8 product-details">
            <span class="bundle-title">{{ currentPackage.title }}</span> <br/>
            <span class="bundle-text">bundle</span>
          </div>
        </div>

        <div class="orderReviewTable">
          <table class="table table-sm table-borderless">
            <tbody>
              <tr style="border-bottom: solid 0.5px lightgrey;">
                <th scope="row">name</th>
                <td class="text-right">
                  {{ shipping.name }}
                </td>
              </tr>
              <tr style="border-bottom: solid 0.5px lightgrey;">
                <th scope="row">email</th>
                <td class="text-right">{{ email }}</td>
              </tr>
              <tr style="border-bottom: solid 0.5px lightgrey;">
                <th scope="row">address</th>
                <td class="text-right">
                  {{ this.shipping.address.line1 }} <br/>
                </td>
              </tr>
              <tr style="border-bottom: solid 0.5px lightgrey;" v-if="!currentPackage.freeShipping">
                <th scope="row">delivery</th>
                <td class="text-right">{{ determineCurrencySymbol() }}3</td>
              </tr>
              <tr class="total-amount" style="border-bottom: solid 0.5px lightgrey;">
                <th scope="row">total</th>
                <td class="text-right">
                  {{ determineCurrencySymbol() }}{{ currentPackage.price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="after-order-details center-content" style="padding-top: 30px;">
      <p style="font-family: MuseoSans500;"> thank you so much for your order! <br> your support &amp; belief in us means the world to us. </p>
      <p>you&apos;ll get email updates about the status of your order.</p>
      <p class="follow-our-socials">
        while you&apos;re waiting to be the party&apos;s favorite host, checkout
        our socials to follow our story, participate in giveaways, &amp;
        discover new tunes!
      </p>
    </div>
  </div>
</template>

<script>

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
      email: this.$route.params.email,
      shipping: this.$route.params.shipping,
      currentPackage: this.$route.params.currentPackage,
      currency: this.$route.params.currency,

      packageId: "",
      currencySymbol: "€",
    };
  },

  mounted() {
    if(!this.currentPackage) {
      this.$router.push('/buy');
    }
    this.getCart();
  },


  methods: {

    getCart() {
      console.log("getting cart");
      console.log(this.currentPackage)
      fbq('track', 'Purchase', { value: this.currentPackage.price, currency: this.currency });
      var localCartId = localStorage.getItem("cartId");
      axios
        .get(`${this.$API_URL}/i/cart/${localCartId}`)
        .then((resp) => {
          console.log("got cart");
          var currentCard = resp.data;
          this.currentPackage.price = resp.data.price;
          this.currentPackage.retailPrice = resp.data.retailPrice;

          // Update Analytics data payload
          this.currentAnalyticsCart = {
            currency: this.currency,
            value: currentCard.total,
            items: [this.cart],
          };

          // Google Analytics
          // The money has been secured 🍾
          firebase
            .analytics()
            .logEvent(
              firebase.analytics.EventName.PURCHASE,
              this.currentAnalyticsCart
            );
        })
        .catch((error) => {
          console.log("got cart error");
          console.error(error);
        });
    },

    determineCurrencySymbol() {
      if (this.currency == "usd") return "$";
      else if (this.currency == "gbp") return "£";
      else return "€";
    },
  },


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
  color: #FF9425;
  font-family: "MuseoSans500" !important;
  font-size: 34px;
  margin-bottom: 0;
}
.bundle-text {
  font-family: "MuseoSans500" !important;
  padding: 0;
  color: black;
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
  max-width: 400px;
  margin: 0 auto;
}
</style>
