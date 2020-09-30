<template>
  <section
    class="hero section center-content"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container-sm">
      <div
        class="hero-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <div
          class="hero-figure reveal-from-bottom illustration-element-01"
          data-reveal-value="20px"
          data-reveal-delay="800"
        >
          <c-image
            class="has-shadow"
            :src="require('@/assets/images/splashcoaster.png')"
            alt="coaster"
            :width="528"
            :height="396"
          />
        </div>
        <div class="hero-content">
          <h2 class="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Are you ready to be your friend&apos;s favorite host?
            <!-- We started Fonz Music to solve a problem. -->
          </h2>
          <div class="container-xs">
            <p class="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              We love music, and we especially love vibing to our favorite tunes
              with our closest friends. So after bothering each other enough
              about what song is played next, we thought we’d solve this problem
              once and for all. If you’re ready to solve this for you and your
              friends, go ahead.
            </p>
            <div class="reveal-from-bottom" data-reveal-delay="600">
              <c-button tag="a" color="primary" wide-mobile href="/checkout">
                Buy Your Coaster
              </c-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from "@/utils/SectionProps.js";
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CHeroFull",
  mixins: [SectionProps],
  components: {
    CButton,
    CImage
  }
};
</script>
