<template>
  <div class="banner-style">
    <span> It looks like you haven't registered a coupon code yet. Register now! </span>
  </div>
</template>

<script>
export default {
  name: "AffiliateBanner"
}
</script>

<style scoped>
  .banner-style {
    position: absolute !important;
    top: 0;
    right: 0;
    left: 0;
    z-index: 12 !important;
    background-color: orange;
  }

</style>