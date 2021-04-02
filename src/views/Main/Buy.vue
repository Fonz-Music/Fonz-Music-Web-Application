<template>
  <fragment>
    <c-pricing pricing-switcher class="" />
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutAlternative.vue";
import CStore from "@/components/sections/Buy/Store.vue";
import CPricing from "@/components/sections/Pricing.vue";

export default {
  name: "Secondary",
  components: {
    CPricing,
    CStore
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
