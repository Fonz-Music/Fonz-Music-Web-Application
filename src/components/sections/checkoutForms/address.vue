<template lang="html">
  <div class="addressTab">
    <h3>please fill in your credit card info</h3>
    <div class="addressName">
      <c-input
        type="text"
        placeholder="Full Name"
        form-group="desktop"
        class="inputName"
      >
      </c-input>
    </div>
    <div class="addressStreet">
      <c-input
        type="text"
        placeholder="Street"
        form-group="desktop"
        class="inputEmail"
      >
      </c-input>
    </div>
    <div class="creditDate">
      <c-input
        type="text"
        placeholder="Town"
        form-group="desktop"
        class="inputEmail"
      >
      </c-input>
    </div>
    <div class="creditSecurityCode">
      <c-input
        type="text"
        placeholder="Zip Code"
        form-group="desktop"
        class="inputEmail"
      ></c-input>
    </div>
    <c-button color="primary button-block">submit</c-button>
  </div>
</template>

<script>
import CInput from "@/components/elements/Input.vue";
import CButton from "@/components/elements/Button.vue";
export default {
  name: "address",
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
