<template>
  <section
    class="features-split section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container">
      <div
        class="features-split-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <c-section-header :data="sectionHeader" class="center-content" />
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
              class="split-item-content center-content-mobile reveal-from-right"
              data-reveal-container=".split-item"
            >
              <h3 class="mt-0 mb-12">
                collaborative playing
              </h3>
              <p class="m-0">
                If you're looking for a way to share your house party, hear new
                tunes, or simply make the vibe open source, the fonz coaster is
                the product for you.
              </p>
            </div>
            <div
              class="split-item-image reveal-from-left"
              data-reveal-container=".split-item"
              :class="imageFill && 'split-item-image-fill'"
            >
              <c-image
                :src="require('@/assets/images/splashcoaster.png')"
                alt="Features split image 01"
                :width="528"
                :height="396"
              />
            </div>
          </div>

          <div class="split-item">
            <div
              class="split-item-content center-content-mobile reveal-from-left"
              data-reveal-container=".split-item"
            >
              <h3 class="mt-0 mb-12">
                a modern day jukebox
              </h3>
              <p class="m-0">
                We want to give guests the option to contribute to the vibe,
                make someones day, or share a new tune they've just heard.
                Integrating with music providers, we bring that experience
                everywhere.
              </p>
            </div>
            <div
              class="split-item-image reveal-from-right"
              data-reveal-container=".split-item"
              :class="imageFill && 'split-item-image-fill'"
            >
              <c-image
                :src="require('@/assets/images/splashcoaster.png')"
                alt="Features split image 02"
                :width="528"
                :height="396"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CFeaturesSplit",
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      sectionHeader: {
        title: "How does Fonz work?",
        paragraph:
          "Fonz acts as a communication device, allowing multiple people to contribute to the same Spotiy session."
      }
    };
  }
};
</script>
