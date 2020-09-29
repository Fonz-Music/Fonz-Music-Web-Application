<template>
  <section
    class="hero section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container">
      <div
        class="hero-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <div
          class="split-wrap"
          :class="[
            invertMobile && 'invert-mobile',
            invertDesktop && 'invert-desktop',
            alignTop && 'align-top'
          ]"
        >
          <div class="split-item">
            <div
              class="hero-content split-item-content center-content-mobile reveal-from-top"
            >
              <h1 class="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="150">
                <!-- Make music
                <span style="color: #fcc485;">collaborative</span> again. -->
                because there&apos;s always a
                <span style="color: #fcc485;">perfect song</span> to play next
              </h1>
              <p class="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="300">
                Tap the coaster, queue the party. Fonz offers you a new way to
                play music at parties, events and gatherings. Instead of relying
                on one phone to host the music, now we all can.
              </p>
              <div class="reveal-from-bottom" data-reveal-delay="450">
                <c-button
                  tag="a"
                  class="mt-0 mb-16"
                  color="primary"
                  wide-mobile
                  href="/buy"
                  >Get it now!</c-button
                >
              </div>
              <div class="reveal-from-bottom" data-reveal-delay="500">
                <c-button tag="a" color="secondary" wide-mobile href="/about"
                  >Learn more</c-button
                >
              </div>
            </div>
            <div
              class="hero-figure split-item-image split-item-image-fill illustration-element-01 reveal-from-bottom"
            >
              <figure>
                <c-image
                  class="image-larger"
                  :src="require('@/assets/images/splashGraphic.png')"
                  alt="Splash Coaster"
                  :width="712"
                  :height="400"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CHeroSplit",
  components: {
    CButton,
    CImage
  },
  mixins: [SectionSplitProps]
};
</script>

<style scoped>
@media (min-width: 641px) {
  /* .split-wrap .split-item {
    min-height: 492px;
  } */
}
</style>
