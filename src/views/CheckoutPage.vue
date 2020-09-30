<template>
  <fragment>
    <c-CheckoutCoaster />
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAlternative.vue";
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
      genericSection01Header: {
        title: "Modal - Lorem ipsum is placeholder text commonly used."
      },
      genericSection02Header: {
        title: "Buttons - Lorem ipsum is placeholder text commonly used."
      },
      genericSection03Header: {
        title: "Input forms - Lorem ipsum is placeholder text commonly used."
      },
      genericSection04Header: {
        title: "FAQ - Lorem ipsum is placeholder text commonly used."
      },
      demoModalActive: false
    };
  },
  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
