<template>
    <footer class="site-footer center-content-mobile" :class="topOuterDivider && 'has-top-divider'">
        <div class="container">
            <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
                <div class="footer-top space-between text-xxs">
                    <c-logo />
                    <c-footer-social />
                </div>
                <div class="footer-bottom space-between text-xxs invert-order-desktop">
                    <c-footer-nav />
                    <div class="footer-copyright">&copy; 2021 Fonz Music</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import CLogo from '@/layouts/partials/Logo.vue'
import CFooterNav from '@/layouts/partials/FooterNav.vue'
import CFooterSocial from '@/layouts/partials/FooterSocial.vue'

export default {
  name: 'CFooter',
  components: {
    CLogo,
    CFooterNav,
    CFooterSocial
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
}
</script>