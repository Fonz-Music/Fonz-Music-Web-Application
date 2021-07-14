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
import CFooterOnlyLogo from "@/layouts/footers/FooterOnlyLogo.vue";
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
  background-position: bottom left;
  background-size: 80%;
}
</style>
