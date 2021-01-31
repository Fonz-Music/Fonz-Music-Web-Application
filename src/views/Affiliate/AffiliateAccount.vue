<template>
    <fragment>
    </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAffiliate.vue";
// import section header

export default {
  name: "AffiliateAccount",
  components: {

  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
