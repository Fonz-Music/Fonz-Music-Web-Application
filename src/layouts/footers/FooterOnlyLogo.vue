<template>
  <footer
    class="site-footer center-content-mobile"
    :class="topOuterDivider && 'has-top-divider'"
  >
    <div class="container text-center">
      <c-logo />
    </div>
  </footer>
</template>

<script>
import CLogo from "@/layouts/partials/Logo.vue";

export default {
  name: "CFooterOnlyLogo",
  components: {
    CLogo
    // CFooterNav,
    // CFooterSocial
  },
  props: {
    topOuterDivider: {
      type: Boolean,
      default: false
    },
    topDivider: {
      type: Boolean,
      default: false
    }
  }
};
</script>
