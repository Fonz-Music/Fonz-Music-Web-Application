<template>
  <section
    class="cta section center-content-mobile reveal-from-bottom"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider'
      /* hasBgColor && 'has-bg-color',
      invertColor && 'invert-color' */
    ]"
  >
    <div class="container">
      <div
        class="cta-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
          split && 'cta-split'
        ]"
      >
        <div class="cta-slogan">
          <h3 class="m-0">Get the app now!</h3>
        </div>
        <div class="cta-action">
          <c-button-group>
            <c-button tag="a" href="https://apps.apple.com/us/app/fonz-music/id1537308329">
              <font-awesome-icon class="icon" :icon="['fab', 'app-store']" />
              App Store
            </c-button>
            <c-button tag="a" href="https://play.google.com/store/apps/details?id=com.fonzmusic.fonz&hl=en_US&gl=US">
              <font-awesome-icon class="icon" :icon="['fab', 'google-play']" />
              Google Play
            </c-button>
          </c-button-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from "@/utils/SectionProps.js";
import CButton from "@/components/elements/Button.vue";
import CButtonGroup from "@/components/elements/ButtonGroup.vue";

export default {
  name: "DownloadApp",
  components: {
    CButton,
    CButtonGroup
  },
  mixins: [SectionProps],
  props: {
    split: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.icon {
  margin: 0.125rem;
  margin-right: 1rem;
}
</style>
