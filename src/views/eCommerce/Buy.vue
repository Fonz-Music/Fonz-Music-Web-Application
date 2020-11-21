<template>
  <fragment>
    <c-pricing pricing-switcher class="" />
    <c-HeroFull />
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAlternative.vue";
// import section header
// import sections
import CPricing from "@/components/sections/Pricing.vue";
// import some required elements
import CHeroFull from "@/components/sections/HeroFull.vue";
// import CHeroFull02 from "@/components/sections/HeroFull02.vue";

export default {
  name: "Secondary",
  components: {
    CHeroFull,
    // CHeroFull02,

    CPricing
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
