<template>
  <footer class="site-footer" :class="topOuterDivider && 'has-top-divider'">
    <div class="container">
      <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
        <div class="footer-top text-xxs">
          <div class="footer-blocks">
            <div class="footer-block">
              <c-logo class="mb-16" />
              <div class="footer-copyright">&copy; 2020 Fonz Music</div>
            </div>
            <div class="footer-block">
              <div class="footer-block-title">Fonz Music LLC</div>
              <ul class="list-reset mb-0">
                <li>
                  157 Vassall Street
                </li>
                <li>
                  Quincy, MA 02170
                </li>
                <li>
                  United States of America
                </li>
              </ul>
            </div>
            <div class="footer-block">
              <div class="footer-block-title">Contact</div>
              <ul class="list-reset mb-0 mb-0">
                <li>
                  <a href="mailto: info@fonzmusic.com">contact@fonzmusic.com</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/usefonz/">@usefonz</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom space-between center-content-mobile text-xxs">
          <c-footer-nav />
          <c-footer-social />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CLogo from "@/components/layout/partials/Logo.vue";
import CFooterNav from "@/components/layout/partials/FooterNav.vue";
import CFooterSocial from "@/components/layout/partials/FooterSocial.vue";

export default {
  name: "CFooter",
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
};
</script>
