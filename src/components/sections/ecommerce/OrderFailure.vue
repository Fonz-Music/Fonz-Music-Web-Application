<template lang="html">
  <div class="order-failure center-content">
    <h3 class="text-center uh-oh-header">uh-oh!</h3>
    <p>Something went wrong...</p>
    <p>Let&apos;s try that again!</p>
    <div class="text-center">
      <router-link class="go-back-button" to="/checkout" tag="button"
        >go back</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderFailureComponent",
  components: {
    // CInput
    // CButton
  },
  methods: {}
};
</script>

<style lang="css" scoped>
/* c-button {
  width: 90px;
} */
.order-failure {
  padding-top: 200px;
}
.uh-oh-header {
  color: #ff9425;
}
.go-back-button {
  background-color: #ff9425;
  color: white;
  width: 125px;
  height: 35px;
  border-radius: 10px;
}
</style>
