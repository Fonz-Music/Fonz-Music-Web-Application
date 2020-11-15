<template>
    <fragment>
    </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAffiliate.vue";
// import section header
// import sections
// import some required elements

export default {
  name: "AffiliateFinancial",
  components: {
  },

  beforeMount() {
    this.eventPageViewAbout();
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
