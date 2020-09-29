<template>
  <section
    class="coaster-buy-info section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container">
      <div
        class="coaster-buy-info-split-inner section-inner"
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
                Become Everyone&apos;s Favorite Host
              </h3>
              <p class="m-0">
                the fonz coaster integrates with our Fonz App to solve the
                problem of collaborative queuing. No more interrupting, shoulder
                tapping, or yelling to add to the vibe.
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
                Optimized For Your Lifestyle
              </h3>
              <p class="m-0">
                Made with high quality lightweight plastic, the fonz coaster is
                built to be portable as well as completely spill-proof, so no
                worries bringing it to the pregame, tailgate, or after-party.
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
  name: "CCoasterBuyInfo",
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      sectionHeader: {
        title: "What is a fonz Coaster?",
        paragraph:
          "Fonz Coasters act as a portable Jukebox. The host links their music provider to the coaster and guests join their session by tapping the coaster."
      }
    };
  }
};
</script>
