<template>
  <div>
    Redirecting...
  </div>
</template>

<script>
export default {
  name: "PageNotFoundPage",
  components: {
  },

  created() {
    this.$router.go("https://onelink.to/2z5y7a");
  },
};
</script>
