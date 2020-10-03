<template lang="html">
  <div class="emailTab">
    <h3>what&apos;s your email?</h3>
    <p>enter it below</p>
    <div class="emailSubmit">
      <c-input
        type="text"
        placeholder="email"
        form-group="desktop"
        class="inputEmail"
      >
        <c-button color="primary">submit</c-button>
      </c-input>
    </div>
    <div class="applePay">
      <!-- <p>or continue</p> -->
      <button
        class="button button-block"
        tag="inputPromo"
        type="submit"
        value="Submit"
      >
        Pay with Apple
      </button>
    </div>
    <div class="googlePay">
      <!-- <p>or continue</p> -->
      <button
        class="button button-block"
        tag="inputPromo"
        type="submit"
        value="Submit"
      >
        Pay with Google
      </button>
    </div>
  </div>
</template>

<script>
import CInput from "@/components/elements/Input.vue";
import CButton from "@/components/elements/Button.vue";
export default {
  name: "email",
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
.emailTab {
  max-width: 500px;
  /* padding: auto; */
  margin: auto;
}

.emailTab p {
  text-align: center;
}
.submitButton {
  background-color: #ff9425;
  color: white;
}
.noPromo button {
  background-color: #b288b9;
  color: white;
}
.button-block {
  margin: 35px 0;
}
</style>
