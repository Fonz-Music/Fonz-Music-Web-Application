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
              <c-carousel :autorotate="3000">
                <c-carousel-item
                  ><c-image
                    :src="require('@/assets/images/splashcoaster.png')"
                    alt="Features split image 01"
                    :width="528"
                    :height="396"
                /></c-carousel-item>
                <c-carousel-item
                  >It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout.</c-carousel-item
                >
                <c-carousel-item
                  >There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.</c-carousel-item
                >
                <c-carousel-item
                  >Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.</c-carousel-item
                >
              </c-carousel>
            </div>
            <div
              class="split-item-image reveal-from-left"
              data-reveal-container=".split-item"
              :class="imageFill && 'split-item-image-fill'"
            >
              <h3 class="mt-0 mb-12">
                Collaborative Playing
              </h3>
              <p class="m-0">
                If you're looking for a way to share your house party, hear new
                tunes, or simply make the vibe open source, the fonz coaster is
                the product for you.
              </p>
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
import CCarouselItem from "@/components/elements/CarouselItem.vue";

export default {
  name: "CCheckoutCoaster",
  components: {
    CSectionHeader,
    CImage,
    CCarouselItem
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
