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
import CLogo from "@/components/layout/partials/Logo.vue";
// import CFooterNav from '@/components/layout/partials/FooterNav.vue'
// import CFooterSocial from '@/components/layout/partials/FooterSocial.vue'

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
