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
          <div class="center-content">
            <div
              class="hero-content split-item-content center-content-mobile reveal-from-top"
            >
              <h1 class="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="150">
                Want to talk to us?
              </h1>
              <p class="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="300">
                We've listed some FAQs below. <br />
                If your question hasn't been answered, feel free to contact us!
                <br />
                <a href="instagram.com/usefonz">@usefonz </a> <br />
                <a href="mailto:info@fonzmusic.com">contact@fonzmusic.com</a>
              </p>
              <h4 class="mt-0 mb-32 reveal-from-bottom" data-reveal delay="300">
                FAQs
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";

export default {
  name: "CHeroSplit",
  components: {},
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
