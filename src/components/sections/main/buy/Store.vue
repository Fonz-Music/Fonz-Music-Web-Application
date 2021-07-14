<template>
  <section class="section" style="background-color: rgba(232, 232, 232, .5); padding-bottom: 20px;">
    <div class="section-inner" style="padding-top: 60px;">


    <div class="container">
      <div v-if="loading" class="spinner center-content">
        <FingerprintSpinner
          class="the-spinner"
          :animation-duration="2000"
          :size="100"
          :color="'#ff9425'"
        />
      </div>
      <div v-if="!this.loading" class="row" style="align-items: center;">
        <div class="col-md-5 col-sm-12">
          <img src="@/assets/images/Icons/coasterMockupPng.png"/>
        </div>
        <div class="col-md-7 col-sm-12">
          <div class="row-12 mobile-adapt">
            <span style="font-weight: 700; color: black; font-size: 34px;"> fonz coaster </span>
          </div>
          <div class="row-12 mobile-adapt">
            <span style="font-weight: 500; color: grey; font-size: 18px;"> make a good party a <span style="color: #B288B9;"> great </span> one </span>
          </div>

          <div class="b-row" style="padding-top: 20px; display: flex; flex-wrap: wrap;">
            <div class="col-md-4 col-sm-12 mobile-padding" style="padding-right: 2px; padding-left: 2px;">
              <div class="price-selector-inactive mobile-adapt">
                <div>
                  <span style="color: black; font-size: 16px;"> {{ this.getItemTitle(0) }} </span>
                </div>
                <div>
                  <span style="color: grey; font-size: 14px;"> 1 Coaster </span>
                </div>
                <div>
                  <span style="color: #B288B9; font-size: 14px;"> {{ determineCurrencySymbol }}{{ this.perItemPrice(0) }} each </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;"> 
                    For the host who loves hearing new tunes with friends and is ready to simplify that process and empower their guests to contribute to the vibe.
                  </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;">
                  - €3 Shipping (FREE Shipping on purchases of two or more) <br>
                  - 100% waterproof and lightweight <br>
                  - Allow your friends to queue songs whenever you're together
                  </span>
                </div>
              </div>
              <div class="price-area">
                <div class="discount-section">
                  <span> only </span>
                </div>
                <div class="price-section">
                  <span> {{ determineCurrencySymbol }}{{ this.pricePlans[0].price }}.00 </span>
                </div>
              </div>
              <button class="select-button-active" @click="updatePackage(0)">
                <span style="font-weight: 700;"> Purchase </span>
              </button>
            </div>

            <div class="col-md-4 col-sm-12 mobile-padding" style="padding-right: 2px; padding-left: 2px;">
              <div class="price-selector-inactive mobile-adapt">
                <div>
                  <span style="color: black; font-size: 16px;"> {{ this.getItemTitle(1) }} </span>
                </div>
                <div>
                  <span style="color: grey; font-size: 14px;"> 2 Coasters </span>
                </div>
                <div>
                  <span style="color: #B288B9; font-size: 14px;"> {{ determineCurrencySymbol }}{{ this.perItemPrice(1) }} each</span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;"> 
                    For the DJ who adores throwing parties, tailgates, and pre-games. No more leaving your laptop open, being interrupted, or giving your phone to a stranger.
                  </span>
                </div>
                
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;">
                    - FREE Shipping (Usually €9) <br>
                    - Have a coaster to keep for your roadtrips <br>
                    - No more shoulder-taps, interrupts, or requests at your shindigs
                  </span>
                </div>
              </div>
              <div class="price-area">
                <div class="discount-section">
                  <span> {{ this.pricePlans[1].discount }}% off </span>
                </div>
                <div class="price-section">
                  <span> {{ determineCurrencySymbol }}{{ this.pricePlans[1].price }}.00 </span>
                </div>
              </div>
              <button class="select-button-active" @click="updatePackage(1)">
                <span style="font-weight: 700;"> Purchase </span>
              </button>
            </div>

            <div class="col-md-4 col-sm-12 mobile-padding" style="padding-right: 2px; padding-left: 2px;">
              <div class="price-selector-inactive mobile-adapt">
                <div>
                  <span style="color: black; font-size: 16px;"> {{ this.getItemTitle(3) }} </span>
                </div>
                <div>
                  <span style="color: grey; font-size: 14px;"> 5 Coasters </span>
                </div>
                <div>
                  <span style="color: #B288B9; font-size: 14px;"> {{ determineCurrencySymbol }}{{ this.perItemPrice(3) }} each </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;"> 
                    For the frat house. For the sorority mixer. For throwing the party of the year. Have a coaster at the pool, at the pong table, at the dye table. Or, for giving out to five friends (who need your music taste).
                  </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;">
                  - FREE Shipping (Usually €15) <br>
                  - Now you can tell who should join the house by what they queue <br>
                  - Have a coaster in every room and every car of your convoy
                  </span>
                </div>
              </div>
              <div class="price-area">
                <div class="discount-section">
                  <span> {{ this.pricePlans[3].discount }}% off </span>
                </div>
                <div class="price-section">
                  <span> {{ determineCurrencySymbol }}{{ this.pricePlans[3].price }}.00 </span>
                </div>
              </div>
              <button class="select-button-active" @click="updatePackage(3)">
                <span style="font-weight: 700;"> Purchase </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");

import CButton from "@/components/elements/Button.vue";
import { Checkout } from "@/plugins/checkout.js";
import { FingerprintSpinner } from "epic-spinners";

export default {
  name:"Store",
  mixins: [Checkout],
  components: {
    CButton,
    FingerprintSpinner,
  },

  data() {
    return {
      pricePlans: [{}, {}, {}, {}, {}],
      addons: { shipping: {}, extraPackaging: {} },
      currentAnalyticsCart: {
        currency: "EUR",
        value: 0.0,
        items: [],
      },
      loading: true
    }
  },

  computed: {
    determineCurrencySymbol() {
      if (this.currency == null) {
        console.log("grabbing currency");
      }
      console.log("this cur " + this.currency);
      if (this.currency == "usd") return "$";
      else if (this.currency == "gbp") return "£";
      else return "€";
    }
  },

  methods: {
    getPricing() {
      this.currency = localStorage.getItem("currency");
      axios.get(`${this.$API_URL}/i/prices/${this.currency}`).then((resp) => {
        const coasterPricing = resp.data.coasters;
        coasterPricing.forEach((price, key) => {
          this.pricePlans[key] = { ...price, key };
        });
        this.addons = resp.data.addons;
        this.loading = false;
      }).catch((error) => {
        console.error(error);
      }); 
    },

    updatePackage(plan) {
      console.log("this pricepan " + JSON.stringify(this.pricePlans[plan]));
      let packageId = this.pricePlans[plan].package;
      if (this.cartId) {
        /* if cart exists, update cart */
        // Remove old package to cart for Google Analytics
        firebase.analytics().logEvent(
          firebase.analytics.EventName.REMOVE_FROM_CART,
          this.currentAnalyticsCart
        );

        // Update Analytics data payload
        this.currentAnalyticsCart = {
          currency: this.currency,
          value: this.pricePlans[plan].price,
          items: [this.pricePlans[plan]],
        };

        // Add new package to cart for Google Analytics
        firebase.analytics().logEvent(
          firebase.analytics.EventName.ADD_TO_CART,
          this.currentAnalyticsCart
        );

        axios.put(`/i/cart/${this.cartId}`, { packageId, currency: this.currency }).then((resp) => {
          console.log("naving to checkout");
          localStorage.setItem("package", packageId);
          this.$router.push("/checkout");
        }).catch((error) => {
          console.log("error naving to checkout");
          console.error(error);
        });
      } 
      
      else {
        /* If no cart currently exists, create cart */
        // Update Analytics data payload
        this.currentAnalyticsCart = {
          currency: this.currency,
          value: this.pricePlans[plan].price,
          items: [this.pricePlans[plan]],
        };

        // Add new package to cart for Google Analytics
        firebase.analytics().logEvent(
          firebase.analytics.EventName.ADD_TO_CART,
          this.currentAnalyticsCart
        );

        axios
          .post(`/i/cart/${packageId}/${this.currency}`)
          .then(resp => {
            let { cartId, price } = resp.data;

            firebase.analytics().logEvent("new_cart", {
              content_type: "coaster",
              packageId,
              currency: this.currency,
              items: [{ cartId, ...this.pricePlans[plan] }]
            });

            fbq('track', 'AddToCart', { value: price });

            console.log("not naving to checkout");
            localStorage.setItem("cartId", cartId);
            localStorage.setItem("package", packageId);
            this.$router.push("/checkout");
          })
          .catch((error) => {
            console.log("big error naving to checkout");
            console.error(error);
          });
      }
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

    getItemTitle(plan) {
      return this.pricePlans[plan].title;
    },
  },

  beforeMount() {
    this.getPricing();
  },

  mounted() {
    firebase.analytics().logEvent(
      firebase.analytics.EventName.VIEW_CART,
      this.currentAnalyticsCart
    );
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .mobile-adapt {
		text-align: center !important;
    margin: auto !important;
  }

  .mobile-padding {
    padding: 0px 5px 60px 5px;
  }

  .mobile-title {
    font-size: 24px;
  }
}

/*  Price Selector Columns */
.price-selector-inactive {
  border-top: .5px solid lightgrey;
  border-right: .5px solid lightgrey;
  border-left: .5px solid lightgrey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: white;
  padding: 15px 10px 5px 10px;
  font-size: 14px;
  min-height: 80%;
}

.select-button-active {
  background-color: #FF9425;
  bottom: 0% !important;
  text-align: center;
  vertical-align: middle;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  width: 100%;
  font-size: 14px;
  height: 35px;
}

.price-section {
  text-align: center;
  padding: 5px 0px 10px 0px;
  font-size: 24px;
  color: #B288B9;
  bottom: 0px;
}

.discount-section {
  text-align: center;
  padding: 15px 0px 0px 0px;
  font-size: 16px;
  color: #B288B9;
}

.price-area {
  background: white;
  border: lightgrey;
  border-right: .5px solid lightgrey;
  border-left: .5px solid lightgrey;
}
</style>