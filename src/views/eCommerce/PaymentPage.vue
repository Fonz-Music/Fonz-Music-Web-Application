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

<script>
import CLayoutCheck from "@/layouts/layoutECommerce.vue";
import PaymentPageComp from "@/components/sections/ecommerce/paymentPageComponent.vue";

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
  }
};
</script>
