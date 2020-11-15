<template>
  <fragment>
      <c-dashboard-bar/>                                  
  </fragment>
</template>


<script>
// import layout
import CLayout from "@/layouts/LayoutAffiliate.vue";
// import section header
// import sections
import CDashboardBar from "@/components/sections/Affiliate/DashboardBar.vue";

// import some required elements

export default {
  name: "AffiliateHome",
  components: {
    CDashboardBar
  },

  beforeMount() {
    this.eventPageViewAbout();
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
