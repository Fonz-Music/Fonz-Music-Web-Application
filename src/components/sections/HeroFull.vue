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
        <div class="hero-content we-love-music">
          <div class="container-xs">
            <p
              class="m-0 mb-32 reveal-from-bottom text-justify"
              data-reveal-delay="400"
            >
              We love music, and we especially love vibing to our favorite tunes
              with our closest friends. So after bothering each other enough
              about what song is played next, we thought we’d solve this problem
              once and for all. If you’re ready to solve this for you and your
              friends, go ahead.
            </p>
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

<style media="screen">
.we-love-music {
  max-width: 900px;
}
</style>
