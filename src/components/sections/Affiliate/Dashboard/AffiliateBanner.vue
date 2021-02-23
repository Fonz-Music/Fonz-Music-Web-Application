<template>
  <div class="banner-style">
    <span class="banner-text"> It looks like you haven't registered a coupon code yet. Register now under 'Account'! </span>
  </div>
</template>

<script>
export default {
  name: "AffiliateBanner"
}
</script>

<style scoped>
  .banner-style {
    position: fixed !important;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 4%;
    z-index: 12 !important;
    background-color: grey;
    text-align: center;
  }

  .banner-text {
    font-size: 15px;
    vertical-align: middle;
    padding: auto;
    color: white;
    font-style: bold;
  }
</style>