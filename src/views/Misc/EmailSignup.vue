<template lang="html">
  <EmailSignup />
</template>

<script>
import EmailSignup from "@/components/sections/EmailSignupComp.vue";
import CLayout from "@/layouts/LayoutDefault.vue";
export default {
  components: {
    EmailSignup
  },
  created() {
    this.$emit("update:layout", CLayout);
  },
}
</script>

<style lang="css" scoped>
</style>
