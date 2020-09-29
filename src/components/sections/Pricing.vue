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
    <div class="container">
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

      <div class="tiles-wrap" :class="[pushLeft && 'push-left']">
        <div class="tiles-item reveal-from-right" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <div class="mb-4 center-content">
              <h4>1 Coaster</h4>
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
                  <li class="is-checked">
                    Fonz Coaster to integrate with the Fonz App
                  </li>

                  <li class="is-checked">100% waterproof and lightweight</li>

                  <li class="is-checked">
                    Allow your friends to queue songs whenever you&apos;re
                    together
                  </li>
                </ul>
              </div>
            </div>
            <div class="pricing-item-cta mb-8">
              <c-button tag="a" color="primary" wide href="#">Buy Now</c-button>
            </div>
          </div>
        </div>

        <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
          <div class="tiles-item-inner">
            <div class="mb-4 center-content">
              <h4>3 Coasters</h4>
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
                  <li class="is-checked">
                    Coasters to leave in multiple rooms during a party
                  </li>

                  <li class="is-checked">
                    Have a coaster to keep for your roadtrips
                  </li>

                  <li class="is-checked">
                    No more shoulder-taps, interrupts, or requests at your
                    shindigs
                  </li>
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
            <div class="mb-4">
              <h4>2 Coasters</h4>
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
                  <li class="is-checked">
                    Keep one in your car, keep the other on your coffeetable,
                    firepit, or pong table
                  </li>
                  <li class="is-checked">
                    Always be ready to turn your car into the dance floor
                  </li>
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

export default {
  name: "CPricing",
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
      priceInput: {
        // 0: "1,000",
        // 1: "1,250"
      },
      priceOutput: {
        plan1: {
          0: ["eur", "22"],
          1: ["$", "27"]
        },
        plan2: {
          0: ["eur", "42"],
          1: ["$", "50"]
        },
        plan3: {
          0: ["eur", "50"],
          1: ["$", "60"]
        }
      }
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
      return set !== undefined
        ? values[this.priceChangerValue][set]
        : values[this.priceChangerValue];
    }
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
  }
};
</script>
