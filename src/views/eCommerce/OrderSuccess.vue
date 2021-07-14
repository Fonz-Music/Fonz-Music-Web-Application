<template lang="html">
  <SuccessfulOrder />
</template>

<script>
import CLayout from "@/layouts/layoutMain.vue";
import SuccessfulOrder from "@/components/sections/ecommerce/SuccessfulOrder.vue";

export default {
  name: "OrderSuccess",
  components: {
    SuccessfulOrder
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

<style lang="css" scoped>
.order-success {
  max-width: 900px;
}
.logoWordmark {
  margin: 10px auto;
  width: 25%;
  max-width: 150px;
}
</style>
