<template>
  <fragment>
    <c-header nav-position="right" class="reveal-from-top" />
    <main class="site-content">
      <slot />
    </main>
    <recent-orders />
    <c-footer />
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
    RecentOrders,
  },
};
</script>