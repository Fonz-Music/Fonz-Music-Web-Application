<template>
  <div class="order-failure-page">
    <OrderFailureComponent />
    <!-- <OrderSuccess /> -->
  </div>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAlternative.vue";

import OrderFailureComponent from "@/components/sections/OrderFailure.vue";
import OrderSuccess from "@/components/sections/SuccessfulOrder.vue";
// import CHeroFull02 from "@/components/sections/HeroFull02.vue";

export default {
  name: "OrderFailurePage",
  components: {
    OrderFailureComponent,
    OrderSuccess
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
