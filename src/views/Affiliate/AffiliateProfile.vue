<template>
    <fragment>
    </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAffiliate.vue";
// import section header
// import sections
import CGuestInstructions from "@/components/sections/GuestInstructions.vue";
import CHostInstructions from "@/components/sections/HostInstructions.vue";
import CFeaturesSplit from "@/components/sections/FeaturesSplit.vue";
// import some required elements

export default {
  name: "AffiliateProfile",
  components: {
    CGuestInstructions,
    CHostInstructions,
    CFeaturesSplit
  },

  beforeMount() {
    this.eventPageViewAbout();
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
