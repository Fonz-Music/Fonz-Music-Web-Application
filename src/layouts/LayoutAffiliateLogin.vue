<template class="">
  <fragment>
    <div class="background-mountain">
      <c-header nav-position="right" class="reveal-from-top" />
      <main class="site-content entire-site">
        <slot />
      </main>
      <!-- <recent-orders /> -->
      <c-footer />
    </div>
  </fragment>
</template>


<script>
import CHeader from "@/components/layout/partials/Affiliate/HeaderAffiliate.vue";
import CFooter from "@/components/layout/Footer.vue";
export default {
  components: {
    CHeader,
    CFooter,
  }
};
</script>

<style media="screen">
.background-mountain {
  background: url(../assets/images/backgroundMountain.svg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 80%;
}
</style>
