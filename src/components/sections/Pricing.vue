<template>
  <section
    class="pricing section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container" id="pricingSection">
      <div
        class="pricing-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <h2
          class="mt-0 mb-16 reveal-from-bottom text-center favorite-host"
          data-reveal-delay="150"
        >
          <!-- Make music
        <span style="color: #fcc485;">collaborative</span> again. -->
          are you ready to become your friend&apos;s
          <span style="color: #fcc485;">favorite host?</span>
        </h2>
      </div>

      <div
        class="tiles-wrap"
        :class="[pushLeft && 'push-left']"
        v-show="this.showPricing"
      >
        <div class="tiles-item reveal-from-right" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <div class="coaster-package-info row">
              <div class="col-8 coaster-name">
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
            <c-image
              class="image-medium"
              :src="require('@/assets/images/coaster1.png')"
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

        <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
          <div class="tiles-item-inner">
            <div class="coaster-package-info">
              <div class="row">
                <div class="col-8 coaster-name">
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
                <div class="percent-off">
                  <span
                    class="pricing-item-price-amount h3"
                    style="color: orange"
                  >
                    {{ this.pricePlans[2].discount }}
                  </span>
                  <span class="p">% off &amp; FREE shipping</span>
                </div>
              </div>
            </div>
            <c-image
              class="image-medium"
              :src="require('@/assets/images/coaster3.png')"
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
                    style="text-decoration: Line-Through; color: orange"
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

        <div class="tiles-item reveal-from-left" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <div class="coaster-package-info">
              <div class=" row">
                <div class="col-8 coaster-name">
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
                  <div class="percent-off">
                    <span
                      class="pricing-item-price-amount h3"
                      style="color: orange"
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
              :src="require('@/assets/images/coaster2.png')"
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
                    style="text-decoration: Line-Through; color: orange"
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
      </div>
    </div>
  </section>
</template>

<script>
import { SectionTilesProps } from "@/utils/SectionProps.js";
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";

const axios = require("axios");
import { Checkout } from "@/plugins/checkout.js";
console.log({ Checkout });

export default {
  name: "CPricing",
  mixins: [Checkout],
  components: {
    CSectionHeader,
    CButton,
    CImage
  },
  mixins: [SectionTilesProps],
  props: {
    pricingSwitcher: {
      type: Boolean,
      default: false
    },
    pricingSlider: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sectionHeader: {
        title: "Queue the party now!",
        paragraph: ""
      },
      priceChangerValue: "1",
      // priceInput: {
      //   // 0: "1,000",
      //   // 1: "1,250"
      // },
      // priceOutput: {
      //   plan1: ["$", "34"],
      //   plan2: ["$", "54"],
      //   plan3: ["$", "74"],
      // },
      showPricing: false,
      // currencySymbol: "€",
      pricePlans: [{}, {}, {}, {}, {}],
      addons: { shipping: {}, extraPackaging: {} }
    };
  },
  computed: {
    determineCurrencySymbol() {
      console.log("this cur " + this.currency);
      if (this.currency == "usd") return "$";
      else if (this.currency == "gbp") return "£";
      else return "€";
    }
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
      let packageId = this.pricePlans[plan].package;
      console.log(this.pricePlans[1]);
      console.log("pack id " + this.pricePlans[plan].package);
      if (this.cartId) {
        // update CART
        firebase.analytics().logEvent("change_cart", {
          content_type: "coaster",
          packageId,
          currency: this.currency,
          items: [{ cartId: this.cardId, ...this.pricePlans[plan] }]
        });
        console.log("pack id " + packageId);
        axios
          .put(`/i/cart/${this.cartId}`, { packageId, currency: this.currency })
          .then(resp => {
            localStorage.setItem("package", packageId);
            this.$router.push("/checkout");
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        // create CART
        axios
          .post(`/i/cart/${packageId}/${this.currency}`)
          .then(resp => {
            const cartId = resp.data.cartId;
            firebase.analytics().logEvent("new_cart", {
              content_type: "coaster",
              packageId,
              currency: this.currency,
              items: [{ cartId, ...this.pricePlans[plan] }]
            });
            localStorage.setItem("cartId", cartId);
            localStorage.setItem("package", packageId);
            this.$router.push("/checkout");
          })
          .catch(error => {
            console.error(error);
          });
      }
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
  }
};
</script>

<style media="screen">
.pricing .tiles-item-inner {
  background: #d7d7d7 !important;
}
.pricing .tiles-item-inner h3,
p {
  /* color: white !important; */
}
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
</style>
