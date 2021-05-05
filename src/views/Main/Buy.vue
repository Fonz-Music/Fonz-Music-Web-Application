<template>
  <fragment>
    <c-store />
    <c-copy />
    <c-tutorial />
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutAlternative.vue";
import CCopy from "@/components/sections/Buy/Copy.vue"
import CTutorial from "@/components/sections/About/Tutorial.vue"
import CStore from "@/components/sections/Buy/Store.vue";
import CPricing from "@/components/sections/Pricing.vue";

export default {
  name: "Secondary",
  components: {
    CPricing,
    CStore,
    CTutorial,
    CCopy
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
