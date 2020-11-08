<template>
  <div class="payment-page">
    <fragment>
      <PaymentPageComp />
    </fragment>
  </div>
</template>
<style lang="css" scoped>
/* c-button {
  width: 90px;
} */

.btn-secondary {
  background-color: #b288b9;
}
.paymentTab p {
  text-align: center;
}
.submitButton {
  background-color: #ff9425;
  color: white;
}
.button-block {
  margin: 35px 0;
}
.payment-page {
  padding-top: 100px;
  min-height: 900px;
}
</style>
<!-- <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script> -->
<script>
// import layout
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import CLayoutCheck from "@/layouts/LayoutCheckout.vue";
// import section header
// import sections

import PaymentPageComp from "@/components/sections/paymentPageComponent.vue";
// import CHeroFull02 from "@/components/sections/HeroFull02.vue";

export default {
  name: "Secondary",
  components: {
    PaymentPageComp
  },
  data() {
    return {
      demoModalActive: false
    };
  },
  created() {
    this.$emit("update:layout", CLayoutCheck);
  },
  mounted() {
    // let polyfillScript = document.createElement("script");
    // polyfillScript.setAttribute(
    //   "src",
    //   "https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"
    // );
    // document.head.appendChild(polyfillScript);
  }
};
</script>
