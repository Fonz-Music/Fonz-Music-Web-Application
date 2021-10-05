<template>
  <fragment>
    <c-buy-store />
    <c-buy-copy />
    <c-tutorial />
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutAlternative.vue";
import CBuyCopy from "@/components/sections/main/buy/BuyCopy.vue"
import CBuyStore from "@/components/sections/main/buy/BuyStore.vue";

import CTutorial from "@/components/sections/main/about/Tutorial.vue";

export default {
  name: "Secondary",
  components: {
    CBuyCopy,
    CBuyStore,
    CTutorial,
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
