<template>
  <fragment>
    <!-- <c-header nav-position="right" hide-nav /> -->
    <main class="site-content">
      <slot />
    </main>
    <c-footerOnlyLogo />
  </fragment>
</template>

<script>
// import CHeader from '@/compo nents/layout/Header.vue'
import CFooterOnlyLogo from "@/components/layout/FooterOnlyLogo.vue";
export default {
  components: {
    CFooterOnlyLogo
  }
};
</script>
