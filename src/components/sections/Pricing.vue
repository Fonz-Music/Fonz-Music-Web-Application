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
    <div class="container">
      <div
        class="pricing-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
        ]"
      >
        <c-section-header
          :data="sectionHeader"
          tag="h1"
          class="center-content reveal-from-bottom"
        />
      </div>

      <div class="tiles-wrap" :class="[pushLeft && 'push-left']">
        <div class="tiles-item reveal-from-right" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <c-image
              class="image-medium"
              :src="require('@/assets/images/splashcoaster.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="pricing-item-header pb-24 mb-24">
                <div class="pricing-item-price mb-4">
                  <span class="pricing-item-price-currency h3">{{
                    getPricingData(this.priceOutput.plan1, 0)
                  }}</span>
                  <span class="pricing-item-price-amount h1">{{
                    getPricingData(this.priceOutput.plan1, 1)
                  }}</span>
                  <span class="pricing-item-price-after text-sm">{{
                    getPricingData(this.priceOutput.plan1, 2)
                  }}</span>
                </div>
                <div class="text-xs text-color-low">
                  Lorem ipsum is a common text
                </div>
              </div>
              <div class="pricing-item-features mb-40">
                <div
                  class="pricing-item-features-title h6 text-xs text-color-high mb-24"
                >
                  What’s included
                </div>
                <ul class="pricing-item-features-list list-reset text-xs mb-32">
                  <li class="is-checked">Excepteur sint occaecat velit</li>
                </ul>
              </div>
            </div>
            <div class="pricing-item-cta mb-8">
              <c-button tag="a" color="primary" wide href="#"
                >Start free trial</c-button
              >
            </div>
          </div>
        </div>

        <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
          <div class="tiles-item-inner">
            <c-image
              class="image-medium"
              :src="require('@/assets/images/splashcoaster.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
            <div class="pricing-item-content">
              <div class="pricing-item-header pb-24 mb-24">
                <div class="pricing-item-price mb-4">
                  <span class="pricing-item-price-currency h3">{{
                    getPricingData(this.priceOutput.plan2, 0)
                  }}</span>
                  <span class="pricing-item-price-amount h1">{{
                    getPricingData(this.priceOutput.plan2, 1)
                  }}</span>
                  <span class="pricing-item-price-after text-sm">{{
                    getPricingData(this.priceOutput.plan2, 2)
                  }}</span>
                </div>
                <div class="text-xs text-color-low">
                  Lorem ipsum is a common text
                </div>
              </div>
              <div class="pricing-item-features mb-40">
                <div
                  class="pricing-item-features-title h6 text-xs text-color-high mb-24"
                >
                  What’s included
                </div>
                <ul class="pricing-item-features-list list-reset text-xs mb-32">
                  <li class="is-checked">Excepteur sint occaecat velit</li>
                </ul>
              </div>
            </div>
            <div class="pricing-item-cta mb-8">
              <c-button tag="a" color="primary" wide href="#">Buy Now</c-button>
            </div>
          </div>
        </div>

        <div class="tiles-item reveal-from-left" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <c-image
              class="image-medium"
              :src="require('@/assets/images/splashcoaster.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
            />
                        <div class="pricing-item-content">
              <div class="pricing-item-header pb-24 mb-24">
                <div class="pricing-item-price mb-4">
                  <span class="pricing-item-price-currency h3">{{
                    getPricingData(this.priceOutput.plan3, 0)
                  }}</span>
                  <span class="pricing-item-price-amount h1">{{
                    getPricingData(this.priceOutput.plan3, 1)
                  }}</span>
                  <span class="pricing-item-price-after text-sm">{{
                    getPricingData(this.priceOutput.plan3, 2)
                  }}</span>
                </div>
                <div class="text-xs text-color-low">
                  Lorem ipsum is a common text
                </div>
              </div>
              <div class="pricing-item-features mb-40">
                <div
                  class="pricing-item-features-title h6 text-xs text-color-high mb-24"
                >
                  What’s included
                </div>
                <ul class="pricing-item-features-list list-reset text-xs mb-32">
                  <li class="is-checked">Excepteur sint occaecat velit</li>
                </ul>
              </div>
            </div>
            <div class="pricing-item-cta mb-8">
              <c-button tag="a" color="primary" wide href="#">Buy Now</c-button>
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

export default {
  name: "CPricing",
  components: {
    CSectionHeader,
    CButton,
    CImage,
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
      priceInput: {
        // 0: "1,000",
        // 1: "1,250"
      },
      priceOutput: {
        plan1: ["$", "34"],
        plan2: ["$", "54", "/m"],
        plan3: ["$", "74", "/m"],
      },
    };
  },
  methods: {
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
    getPricingData(values, set) {
      return values[0] + values[1];
      // return set !== undefined
      //   ? values[this.priceChangerValue][set]
      //   : values[this.priceChangerValue];
    },
    getPricing() {
      const baseUrl = "http://localhost:5001/fonz-music-web/us-central1/app";
      let currency = "eur";
      axios
        .get(`${baseUrl}/i/prices/${currency}`)
        .then((resp) => {
          const pricing = resp.data.pricing;
          console.log({ pricing });
          pricing.forEach((price, key) => {
            console.log(key);
            console.log({ price });
            console.log(price.retailPrice.toString());
            let planName = `plan${key + 1}`;
            this.priceOutput[planName][1] = price.retailPrice;
          });

          // console.log({ resp })
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    if (this.pricingSlider) {
      this.$refs.slider.setAttribute("min", 0);
      this.$refs.slider.setAttribute(
        "max",
        Object.keys(this.priceInput).length - 1
      );
      this.thumbSize = parseInt(
        window
          .getComputedStyle(this.$refs.sliderValue)
          .getPropertyValue("--thumb-size"),
        10
      );
      this.handleSliderValuePosition(this.$refs.slider);
    }
    this.getPricing();
  },
};
</script>