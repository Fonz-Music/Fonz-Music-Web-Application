<template>
    <fragment>
      <c-guest-instructions/>
    </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAffiliate.vue";
// import section header
// import sections
import CGuestInstructions from "@/components/sections/GuestInstructions.vue";
// import some required elements

export default {
  name: "AffiliateAnalytics",
  components: {
    CGuestInstructions,
  },

  beforeMount() {
    this.eventPageViewAbout();
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
