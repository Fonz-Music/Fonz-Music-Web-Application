<template>
  <section
    class="pricing section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
    ]"
  >
    <div class="container" id="pricingSection">
      <div
        class="pricing-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
        ]"
      >
        <h2
          class="reveal-from-bottom text-center favorite-host"
          data-reveal-delay="150"
        >
          are you ready to become your friend&apos;s
          <span style="color: #ff9425;">favorite host?</span>
        </h2>
      </div>
      <div v-if="loading" class="spinner center-content">
        <FingerprintSpinner
          class="the-spinner"
          :animation-duration="2000"
          :size="100"
          :color="'#ff9425'"
        />
      </div>

      <div
        class="tiles-wrap"
        :class="[pushLeft && 'push-left']"
        v-show="this.showPricing"
      >
        <div
          class="tiles-item bundle-pricing-card reveal-from-right"
          data-reveal-delay="400"
        >
          <div class="center-content bundle-name-div">
            <h4 class="bundle-name">{{ this.getItemTitle(0) }}</h4>
            <div class="bundle-text">
              <p>bundle</p>
            </div>
          </div>

          <div class="tiles-item-inner">
            <div class="coaster-package-info">
              <div class=" row">
                <div class="col-8 coaster-name center-content">
                  <h2>1 coaster</h2>
                </div>
                <div class="col-4 text-right coaster-price">
                  <span class="pricing-item-price-currency h3">
                    {{ determineCurrencySymbol }}
                  </span>
                  <span
                    class="pricing-item-price-amount h1"
                    style="color: #B288B9"
                  >
                    {{ this.pricePlans[0].price }}
                  </span>
                </div>
              </div>
              <div class="percent-and-shipping ">
                <div class="percent-off center-content">
                  <span class="p"></span>
                </div>
              </div>
            </div>
            <c-image
              class="image-medium"
              :src="require('@/assets/images/CoasterPictures/coaster1.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="">
                <div class="pricing-item-price mb-4 center-content">
                  <span class="pricing-item-price-currency h3">
                    {{ determineCurrencySymbol }}
                  </span>
                  <span class="pricing-item-price-amount h2">
                    {{ this.perItemPrice(0) }}
                  </span>
                </div>
                <div class="text-xs">
                  <p>
                    For the host who loves hearing new tunes with friends and is
                    ready to simplify that process and empower their guests to
                    contribute to the vibe.
                  </p>
                </div>
              </div>
              <div class=" mb-40">
                <ul class="package-benefits">
                  <li class="">
                    {{ determineCurrencySymbol + this.addons.shipping.price }}
                    Shipping (FREE Shipping on purchases of two or more)
                  </li>

                  <li class="">100% waterproof and lightweight</li>

                  <li class="">
                    Allow your friends to queue songs whenever you&apos;re
                    together
                  </li>
                </ul>
              </div>
            </div>
            <div class="pricing-item-cta mb-8">
              <c-button
                class="buy-now-button"
                tag="a"
                color="primary"
                wide
                @click="updatePackage(0)"
                >Buy Now</c-button
              >
            </div>
          </div>
        </div>

        <div
          class="tiles-item bundle-pricing-card reveal-from-bottom"
          data-reveal-delay="200"
        >
          <div class="center-content bundle-name-div">
            <h4 class="bundle-name">{{ this.getItemTitle(2) }}</h4>
            <div class="bundle-text">
              <p>bundle</p>
            </div>
          </div>
          <div class="tiles-item-inner">
            <div class="coaster-package-info">
              <div class="row">
                <div class="col-8 coaster-name center-content">
                  <h2>3 coasters</h2>
                </div>
                <div class="col-4 text-right coaster-price">
                  <span class="pricing-item-price-currency h3">
                    {{ determineCurrencySymbol }}
                  </span>
                  <span
                    class="pricing-item-price-amount h1"
                    style="color: #B288B9"
                  >
                    {{ this.pricePlans[2].price }}
                  </span>
                </div>
              </div>
              <div class="percent-and-shipping">
                <div class="percent-off center-content">
                  <span
                    class="pricing-item-price-amount h3"
                    style="color: #b188b9"
                  >
                    {{ this.pricePlans[2].discount }}
                  </span>
                  <span class="p">% off &amp; FREE shipping</span>
                </div>
              </div>
            </div>
            <c-image
              class="image-medium"
              :src="require('@/assets/images/CoasterPictures/coaster3.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="">
                <div class="pricing-item-price mb-4 center-content">
                  <span class="pricing-item-price-currency h3">
                    {{ determineCurrencySymbol }}
                  </span>
                  <span class="pricing-item-price-amount h2">
                    {{ this.perItemPrice(2) }}
                  </span>
                  <span
                    class="pricing-item-price-amount h3"
                    style="text-decoration: Line-Through; color: #b188b9"
                    >{{ this.perItemPrice(0) }}</span
                  >
                  <span class="pricing-item-price-after text-sm"
                    >&nbsp;each
                  </span>
                </div>
                <div class="text-xs">
                  <p>
                    For the DJ who adores throwing parties, tailgates, and
                    pre-games. No more leaving your laptop open, being
                    interrupted, or giving your phone to a stranger.
                  </p>
                </div>
              </div>
              <div class="">
                <ul class="package-benefits">
                  <li class="">
                    FREE Shipping (Usually
                    {{
                      determineCurrencySymbol + this.addons.shipping.price * 3
                    }})
                  </li>

                  <li class="">Have a coaster to keep for your roadtrips</li>

                  <li class="">
                    No more shoulder-taps, interrupts, or requests at your
                    shindigs
                  </li>
                </ul>
              </div>
            </div>
            <div class="pricing-item-cta mb-8">
              <c-button
                class="buy-now-button"
                tag="a"
                color="primary"
                wide
                @click="updatePackage(2)"
                >Buy Now</c-button
              >
            </div>
          </div>
        </div>

        <div
          class="tiles-item bundle-pricing-card reveal-from-left"
          data-reveal-delay="400"
        >
          <div class="center-content bundle-name-div">
            <h4 class="bundle-name">{{ this.getItemTitle(1) }}</h4>
            <div class="bundle-text">
              <p>bundle</p>
            </div>
          </div>
          <div class="tiles-item-inner">
            <div class="coaster-package-info">
              <div class=" row">
                <div class="col-8 coaster-name center-content">
                  <h2>2 coasters</h2>
                </div>
                <div class="col-4 text-right coaster-price">
                  <span class="pricing-item-price-currency h3">
                    {{ determineCurrencySymbol }}
                  </span>
                  <span
                    class="pricing-item-price-amount h1"
                    style="color: #B288B9"
                  >
                    {{ this.pricePlans[1].price }}
                  </span>
                </div>
                <div class="percent-and-shipping ">
                  <div class="percent-off center-content">
                    <span
                      class="pricing-item-price-amount h3"
                      style="color: #b188b9"
                    >
                      {{ this.pricePlans[1].discount }}
                    </span>
                    <span class="p">% off &amp; FREE shipping</span>
                  </div>
                </div>
              </div>
            </div>
            <c-image
              class="image-medium"
              :src="require('@/assets/images/CoasterPictures/coaster2.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="">
                <div class="pricing-item-price mb-4 center-content">
                  <span class="pricing-item-price-currency h3">
                    {{ determineCurrencySymbol }}
                  </span>
                  <span class="pricing-item-price-amount h2">
                    {{ this.perItemPrice(1) }}
                  </span>
                  <span
                    class="pricing-item-price-amount h3"
                    style="text-decoration: Line-Through; color: #b188b9"
                    >{{ this.perItemPrice(0) }}</span
                  >
                  <span class="pricing-item-price-after text-sm"
                    >&nbsp;each
                  </span>
                </div>
                <div class="text-xs">
                  <p>
                    For the chauffeur who is always playing bangers on the drive
                    home and likes hearing new tunes at their hangout sessions.
                  </p>
                </div>
              </div>
              <div class="">
                <ul class="package-benefits">
                  <li class="">
                    FREE Shipping (Usually
                    {{
                      determineCurrencySymbol + this.addons.shipping.price * 2
                    }})
                  </li>
                  <li class="">
                    Always be ready to turn your car into the dance floor
                  </li>
                  <li class="">
                    Give to a friend to share songs spontaneously
                  </li>
                </ul>
              </div>
            </div>
            <div class="pricing-item-cta mb-8">
              <c-button tag="a" color="primary" wide @click="updatePackage(1)"
                >Buy Now</c-button
              >
            </div>
          </div>
        </div>

        <div
          class="tiles-item bundle-pricing-card reveal-from-bottom"
          data-reveal-delay="200"
        >
          <div class="center-content bundle-name-div">
            <h4 class="bundle-name">{{ this.getItemTitle(3) }}</h4>
            <div class="bundle-text">
              <p>bundle</p>
            </div>
          </div>
          <div class="tiles-item-inner">
            <div class="coaster-package-info">
              <div class="row">
                <div class="col-8 coaster-name center-content">
                  <h2 id="five-coasters">5 coasters</h2>
                </div>
                <div class="col-4 text-right coaster-price">
                  <span class="pricing-item-price-currency h3">
                    {{ determineCurrencySymbol }}
                  </span>
                  <span
                    class="pricing-item-price-amount h3"
                    style="color: #B288B9"
                  >
                    {{ this.pricePlans[3].price9m }}
                  </span>
                </div>
              </div>

              <div class="percent-and-shipping">
                <div class="percent-off center-content">
                  <span
                    class="pricing-item-price-amount h3"
                    style="color: #b188b9"
                  >
                    {{ this.pricePlans[3].discount }}
                  </span>
                  <span class="p">% off &amp; FREE shipping</span>
                </div>
              </div>
            </div>
            <c-image
              class="image-medium"
              :src="require('@/assets/images/CoasterPictures/coaster3.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="">
                <div class="pricing-item-price mb-4 center-content">
                  <span class="pricing-item-price-currency h3">
                    {{ determineCurrencySymbol }}
                  </span>
                  <span class="pricing-item-price-amount h2">
                    {{ this.perItemPrice(3) }}
                  </span>
                  <span
                    class="pricing-item-price-amount h3"
                    style="text-decoration: Line-Through; color: #b188b9"
                    >{{ this.perItemPrice(0) }}</span
                  >
                  <span class="pricing-item-price-after text-sm"
                    >&nbsp;each
                  </span>
                </div>
                <div class="text-xs">
                  <p>
                    For the frat house. For the sorority mixer. For throwing the
                    party of the year. Have a coaster at the pool, at the pong
                    table, at the dye table. Or, for giving out to five friends
                    (who need your music taste).
                  </p>
                </div>
              </div>
              <div class="">
                <ul class="package-benefits">
                  <li class="">
                    FREE Shipping (Usually
                    {{
                      determineCurrencySymbol + this.addons.shipping.price * 5
                    }})
                  </li>

                  <li class="">
                    Now you can tell who should join the house by what they
                    queue
                  </li>

                  <li class="">
                    Have a coaster in every room &amp; every car of your convoy
                  </li>
                </ul>
              </div>
            </div>
            <div class="pricing-item-cta mb-8">
              <c-button
                class="buy-now-button"
                tag="a"
                color="primary"
                wide
                @click="updatePackage(3)"
                >Buy Now</c-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionTilesProps } from "@/utils/SectionProps.js";
import CSectionHeader from "@/components/elements/SectionHeader.vue";
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";
import { FingerprintSpinner } from "epic-spinners";
const axios = require("axios");
import { Checkout } from "@/plugins/checkout.js";
console.log({ Checkout });

export default {
  name: "CPricing",
  mixins: [Checkout],
  components: {
    CSectionHeader,
    CButton,
    CImage,
    FingerprintSpinner,

    // VueProgress
  },
  mixins: [SectionTilesProps],
  props: {
    pricingSwitcher: {
      type: Boolean,
      default: false,
    },
    pricingSlider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sectionHeader: {
        title: "Queue the party now!",
        paragraph: "",
      },
      priceChangerValue: "1",
      currentAnalyticsCart: {
        // For Google Analytics
        currency: "EUR",
        value: 0.0,
        items: [],
      },
      showPricing: false,
      pricePlans: [{}, {}, {}, {}, {}],
      addons: { shipping: {}, extraPackaging: {} },
      loading: true,
    };
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
    },
  },
  methods: {
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
    handlePricingSlide(e) {
      this.handleSliderValuePosition(e.target);
    },
    handleSliderValuePosition(input) {
      const multiplier = input.value / input.max;
      const thumbOffset = this.thumbSize * multiplier;
      const priceInputOffset =
        (this.thumbSize - this.$refs.sliderValue.clientWidth) / 2;
      this.$refs.sliderValue.style.left =
        input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
    },
    updatePackage(plan) {
      console.log("this pricepan " + JSON.stringify(this.pricePlans[plan]));
      let packageId = this.pricePlans[plan].package;
      if (this.cartId) {
        /* if cart exists, update cart */

        // Remove old package to cart for Google Analytics
        firebase
          .analytics()
          .logEvent(
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
        firebase
          .analytics()
          .logEvent(
            firebase.analytics.EventName.ADD_TO_CART,
            this.currentAnalyticsCart
          );

        axios
          .put(`/i/cart/${this.cartId}`, { packageId, currency: this.currency })
          .then((resp) => {
            console.log("naving to checkout");
            localStorage.setItem("package", packageId);
            this.$router.push("/checkout");
          })
          .catch((error) => {
            console.log("error naving to checkout");
            console.error(error);
          });
      } else {
        /* If no cart currently exists, create cart */

        // Update Analytics data payload
        this.currentAnalyticsCart = {
          currency: this.currency,
          value: this.pricePlans[plan].price,
          items: [this.pricePlans[plan]],
        };

        // Add new package to cart for Google Analytics
        firebase
          .analytics()
          .logEvent(
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
    getPricing() {
      this.currency = localStorage.getItem("currency");
      axios
        .get(`${this.$API_URL}/i/prices/${this.currency}`)
        .then((resp) => {
          const coasterPricing = resp.data.coasters;
          coasterPricing.forEach((price, key) => {
            this.pricePlans[key] = { ...price, key };
          });
          this.addons = resp.data.addons;
          this.showPricing = true;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  beforeMount() {
    this.getPricing();
  },
  beforeCreate() {
    // this.getPricing();
  },
  mounted() {
    // Google Analytics 👀
    // Log view cart
    firebase
      .analytics()
      .logEvent(
        firebase.analytics.EventName.VIEW_CART,
        this.currentAnalyticsCart
      );
  },
};
</script>

<style media="screen">
.pricing-inner {
  padding: 50px !important;
}
.pricing .tiles-item-inner {
  background: #d7d7d7 !important;
  height: 800px;
}
.pricing .tiles-item-inner h3,
p {
  /* color: white !important; */
}
.coaster-price {
  margin: auto;
}

.coaster-name h2 {
  font-family: "MuseoSans500" !important;
  font-size: 36px;
}

.bundle-name {
  color: #b188b9;
  font-family: "MuseoSans500" !important;
  font-size: 34px;
  margin-bottom: 0;
}
.bundle-text p {
  padding: 0;
}
/* #five-coasters {
  font-size: 36px;
} */
.package-benefits li {
  color: rgb(149, 156, 177);
}
/* .coaster-price span {
  color: #ff9425;
} */
.favorite-host {
  max-width: 500px;
  margin: 0 auto;
}
.coaster-package-info {
  height: 100px;
}
.single-coaster-package,
.double-coaster-package,
.triple-coaster-package {
  height: 50px;
}
.coaster-name {
  padding: 0 10px;
}
.coaster-price {
  padding: 0 10px;
}
.percent-and-shipping {
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
}
.coaster-name h2 {
  padding: 0;
  margin-top: 5px;
  margin-bottom: 5px;
}
.tiles-item-inner {
  border-radius: 25px;
  padding-top: 10px !important;
}
.button-primary {
  border-radius: 15px !important;
}
.package-benefits {
  list-style: circle !important;
  color: white;
  font-size: 12pt;
}
.the-spinner {
  margin: 0 auto !important;
}
</style>
