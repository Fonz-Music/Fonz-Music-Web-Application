<template lang="html">
  <BugForm />
</template>

<script>
import BugForm from "@/components/sections/BugSubmitComp.vue";
import CLayout from "@/layouts/LayoutCheckout.vue";
export default {
  components: {
    BugForm
  },
  created() {
    this.$emit("update:layout", CLayout);
  },
}
</script>

<style lang="css" scoped>
</style>
