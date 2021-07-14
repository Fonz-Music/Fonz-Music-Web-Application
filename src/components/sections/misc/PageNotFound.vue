<template lang="html">
  <div class="page-404 center-content">
    <h3 class="text-center uh-oh-header">uh-oh!</h3>
    <p>It&apos;s pretty empty out here...</p>
    <p>Return back home!</p>
    <div class="text-center">
      <router-link class="go-back-button" to="/" tag="button"
        >go back</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
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
.page-404 {
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
