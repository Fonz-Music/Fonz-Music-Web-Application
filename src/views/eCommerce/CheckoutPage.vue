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
import CLayout from "@/layouts/LayoutDefault.vue";
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
  // created() {
  //   this.$emit("update:layout", CLayoutCheck);
  // }
  created() {
    this.$emit("update:layout", CLayout);
    /* Include PolyFill CDN (Credit Card Verification) */
    let ckeditor = document.createElement("script");
    ckeditor.setAttribute(
      "src",
      "//polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"
    );
    document.head.appendChild(ckeditor);
  }
};
</script>
