<template>
  <fragment>
    <c-CheckoutCoaster />
  </fragment>
</template>

<script>
// import layout
import CLayoutCheck from "@/layouts/LayoutCheckout.vue";
// import section header
// import sections

import CCheckoutCoaster from "@/components/sections/CheckoutCoasters.vue";
// import CHeroFull02 from "@/components/sections/HeroFull02.vue";

export default {
  name: "Secondary",
  components: {
    CCheckoutCoaster
  },
  data() {
    return {
      demoModalActive: false
    };
  },
  created() {
    this.$emit("update:layout", CLayoutCheck);
  }
};
</script>
