<template lang="html">
  <div class="promoTab">
    <h3>got a promo code?</h3>
    <p>enter it below</p>
    <div class="promoSubmit">
      <input type="text" class="form-input" placeholder="Promo code" />
      <button
        class="button button-block submitButton"
        tag="inputPromo"
        type="submit"
        value="Submit"
      >
        submit
      </button>
    </div>
    <div class="noPromo">
      <p>or continue</p>
      <button
        class="button button-block"
        tag="inputPromo"
        type="submit"
        value="Submit"
      >
        no-promo
      </button>
    </div>
  </div>
</template>

<script>
// import CInput from "@/components/elements/Input.vue";
// import CButton from "@/components/elements/Button.vue";
export default {
  name: "promo",
  components: {
    // CInput
  }
};
</script>

<style lang="css" scoped>
/* c-button {
  width: 90px;
} */
.promoTab {
  max-width: 500px;
  /* padding: auto; */
  margin: auto;
}
input {
  width: 70%;
  margin: 25px auto;
  text-align: center;
}
button {
  /* min-width: 100px; */
  margin: 25px 0;
}
.promoTab p {
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
</style>
