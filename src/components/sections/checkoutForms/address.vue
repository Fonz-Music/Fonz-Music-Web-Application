<template lang="html">
  <div class="addressTab">
    <h3 class="text-center">please fill in your address</h3>
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
  name: "address",
  components: {
    CInput,
    CButton
  },
  methods: {
    nextTab: function() {
      this.$emit("nextTab", 2);
    }
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
