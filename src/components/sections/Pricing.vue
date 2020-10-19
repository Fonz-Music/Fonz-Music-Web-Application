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
        <c-section-header
          :data="sectionHeader"
          tag="h1"
          class="center-content reveal-from-bottom"
        />
      </div>

      <div
        class="tiles-wrap"
        :class="[pushLeft && 'push-left']"
        v-show="this.showPricing"
      >
        <div class="tiles-item reveal-from-right" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <div class="mb-2 row">
              <div class="col-8 coaster-name">
                <h2>1 Coaster</h2>
              </div>
              <div class="col-4 text-right">
                <span class="pricing-item-price-currency h3">
                  {{ this.currencySymbol }}
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
              :src="require('@/assets/images/splashcoaster.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="pricing-item-header pb-24 mb-24">
                <div class="pricing-item-price mb-4 center-content">
                  <span class="pricing-item-price-currency h3">
                    {{ this.currencySymbol }}
                  </span>
                  <span class="pricing-item-price-amount h2">
                    {{ this.perItemPrice(0) }}
                  </span>
                </div>
                <div class="text-xs text-color-low">
                  For the host who loves hearing new tunes with friends and is
                  ready to simplify that process and empower their guests to
                  contribute to the vibe.
                </div>
              </div>
              <div class="pricing-item-features mb-40">
                <div
                  class="pricing-item-features-title h6 text-xs text-color-high mb-24"
                >
                  Benefits
                </div>
                <ul class="pricing-item-features-list list-reset text-xs mb-32">
                  <li class="">
                    {{ this.currencySymbol + this.addons.shipping.price }}
                    Shipping (FREE Shipping on orders over
                    {{ this.currencySymbol + this.pricePlans[0].price }})
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
              <c-button tag="a" color="primary" wide @click="updatePackage(0)"
                >Buy Now</c-button
              >
            </div>
          </div>
        </div>

        <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
          <div class="tiles-item-inner">
            <div class="mb-2 row">
              <div class="col-8 coaster-name">
                <h2>3 Coasters</h2>
              </div>
              <div class="col-4 text-right">
                <span class="pricing-item-price-currency h3">
                  {{ this.currencySymbol }}
                </span>
                <span
                  class="pricing-item-price-amount h1"
                  style="color: #B288B9"
                >
                  {{ this.pricePlans[2].price }}
                </span>
              </div>
            </div>
            <c-image
              class="image-medium"
              :src="require('@/assets/images/splashcoaster.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="pricing-item-header pb-24 mb-24">
                <div class="pricing-item-price mb-4 center-content">
                  <span class="pricing-item-price-currency h3">
                    {{ this.currencySymbol }}
                  </span>
                  <span class="pricing-item-price-amount h2">
                    {{ this.perItemPrice(2) }}
                  </span>
                  <span
                    class="pricing-item-price-amount h3"
                    style="text-decoration: Line-Through; color: orange"
                  >
                    {{ this.getRetailPrice(2) }}
                  </span>
                  <span class="pricing-item-price-after text-sm"
                    >&nbsp;each
                  </span>
                </div>
                <div class="text-xs text-color-low">
                  For the DJ who adores throwing parties, tailgates, and
                  pre-games. No more leaving your laptop open, being
                  interrupted, or giving your phone to a stranger.
                </div>
              </div>
              <div class="pricing-item-features mb-40">
                <div
                  class="pricing-item-features-title h6 text-xs text-color-high mb-24"
                >
                  Benefits
                </div>
                <ul class="pricing-item-features-list list-reset text-xs mb-32">
                  <li class="">
                    FREE Shipping (Usually
                    {{ this.currencySymbol + this.addons.shipping.price * 3 }})
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
              <c-button tag="a" color="primary" wide @click="updatePackage(2)"
                >Buy Now</c-button
              >
            </div>
          </div>
        </div>

        <div class="tiles-item reveal-from-left" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <div class="mb-2 row">
              <div class="col-8 coaster-name">
                <h2>2 Coasters</h2>
              </div>
              <div class="col-4 text-right">
                <span class="pricing-item-price-currency h3">
                  {{ this.currencySymbol }}
                </span>
                <span
                  class="pricing-item-price-amount h1"
                  style="color: #B288B9"
                >
                  {{ this.pricePlans[1].price }}
                </span>
              </div>
            </div>
            <c-image
              class="image-medium"
              :src="require('@/assets/images/splashcoaster.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="pricing-item-header pb-24 mb-24">
                <div class="pricing-item-price mb-4 center-content">
                  <span class="pricing-item-price-currency h3">
                    {{ this.currencySymbol }}
                  </span>
                  <span class="pricing-item-price-amount h2">
                    {{ this.perItemPrice(1) }}
                  </span>
                  <span
                    class="pricing-item-price-amount h3"
                    style="text-decoration: Line-Through; color: orange"
                  >
                    {{ this.getRetailPrice(1) }}
                  </span>
                  <span class="pricing-item-price-after text-sm"
                    >&nbsp;each
                  </span>
                </div>
                <div class="text-xs text-color-low">
                  For the chauffeur who is always playing bangers on the drive
                  home and likes hearing new tunes at their hangout sessions.
                </div>
              </div>
              <div class="pricing-item-features mb-40">
                <div
                  class="pricing-item-features-title h6 text-xs text-color-high mb-24"
                >
                  Benefits
                </div>
                <ul class="pricing-item-features-list list-reset text-xs mb-32">
                  <li class="">
                    FREE Shipping (Usually
                    {{ this.currencySymbol + this.addons.shipping.price * 2 }})
                  </li>
                  <li class="">
                    Always be ready to turn your car into the dance floor
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
      currencySymbol: "€",
      pricePlans: [{}, {}, {}, {}, {}],
      addons: { shipping: {}, extraPackaging: {} }
    };
  },
  computed: {},
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
      if (this.cartId) {
        // update CART
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
.coaster-name h2 {
  padding: 0;
  margin-top: 5px;
}
</style>
