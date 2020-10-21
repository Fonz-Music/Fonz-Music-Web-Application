<template>
  <fragment>
    <div class="background-mountain">
      <main class="site-content">
        <slot />
      </main>
      <c-footerOnlyLogo />
    </div>
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
<style media="screen">
.background-mountain {
  background: url(../assets/images/backgroundMountain.svg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 70%;
}
</style>
