<template>
  <div class="order-failure-page">
    <fragment>
      <OrderFailure />
    </fragment>
  </div>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAlternative.vue";

import OrderFailure from "@/components/sections/OrderFailure.vue";
// import CHeroFull02 from "@/components/sections/HeroFull02.vue";

export default {
  name: "OrderFailure",
  components: {
    OrderFailure
  },
  data() {
    return {
      demoModalActive: false
    };
  },
  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
<style media="screen">
.order-failure-page {
  min-height: 600px;
}
</style>
