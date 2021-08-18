<template>
  <fragment>
    <c-checkout-coaster/>
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutCheckout.vue";
import CCheckoutCoaster from "@/components/sections/ecommerce/CheckoutCoasters.vue";

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


  mounted() {
    this.eventPageView();
  },

  created() {
    this.$emit("update:layout", CLayout);
    /* Include PolyFill CDN (Credit Card Verification) */
    let ckeditor = document.createElement("script");
    ckeditor.setAttribute(
      "src",
      "//polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"
    );
    document.head.appendChild(ckeditor);
  },


  methods: {
    eventPageView() {
      firebase.analytics().logEvent("page_view", {
        page_location: "http://web.fonzmusic.com",
        page_path: "/checkout",
        page_title: "Checkout",
      });
    },
  }
};
</script>
