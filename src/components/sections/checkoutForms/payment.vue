<template lang="html">
  <div class="paymentTab">
    <h3>please fill in your credit card info</h3>
    <div class="creditName">
      <c-input
        type="text"
        placeholder="Full Name"
        form-group="desktop"
        class="inputName"
      >
      </c-input>
    </div>
    <div class="creditNumber">
      <c-input
        type="text"
        placeholder="Number"
        form-group="desktop"
        class="inputCreditNumber"
      >
      </c-input>
    </div>
    <div class="creditDate">
      <c-input
        type="text"
        placeholder="Date"
        form-group="desktop"
        class="inputCreditDate"
      >
      </c-input>
    </div>
    <div class="creditSecurityCode">
      <c-input
        type="text"
        placeholder="Security Code"
        form-group="desktop"
        class="inputSecurityCode"
      ></c-input>
    </div>
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="nextTab">Submit</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import CInput from "@/components/elements/Input.vue";
import CButton from "@/components/elements/Button.vue";
export default {
  name: "payment",
  components: {
    CInput,
    CButton
  }
};
</script>

<style lang="css" scoped>
/* c-button {
  width: 90px;
} */
.paymentTab {
  max-width: 500px;
  /* padding: auto; */
  margin: auto;
}
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
</style>
