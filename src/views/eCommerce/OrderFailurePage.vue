<template>
  <div class="order-failure-page">
    <OrderFailureComponent />
    <!-- <OrderSuccess /> -->
  </div>
</template>

<script>
import CLayout from "@/layouts/LayoutDefault.vue";
import OrderFailureComponent from "@/components/sections/ecommerce/OrderFailure.vue";
import OrderSuccess from "@/components/sections/ecommerce/SuccessfulOrder.vue";

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
