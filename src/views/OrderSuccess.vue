<template lang="html">
  <SuccessfulOrder />
</template>

<script>
import SuccessfulOrder from "@/components/sections/SuccessfulOrder.vue";

export default {
  name: "OrderSuccess",
  components: {
    SuccessfulOrder
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
