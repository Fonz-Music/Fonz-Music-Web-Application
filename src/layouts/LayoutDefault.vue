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
import CHeader from "@/components/layout/Header.vue";
import CFooter from "@/components/layout/Footer.vue";
import RecentOrders from "@/components/elements/RecentOrders.vue";
export default {
  components: {
    CHeader,
    CFooter,
    RecentOrders
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
@media (max-width: 767px) {
  .background-mountain {
    background: url(../assets/images/backgroundMountain.svg);
    background-attachment: initial;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 80%;
  }
}
</style>
