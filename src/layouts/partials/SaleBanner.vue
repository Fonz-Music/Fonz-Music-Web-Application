<template>
  <div class='sale-banner-style'>
      to celebrate the launch of fonz 2.0, fonz coasters <span class='push-to-store' @click='pushToStore()'> are now €5! </span>
  </div>
</template>

<script>
export default {
    name: 'SalesBanner',

    methods: {
        pushToStore() {
            this.$router.push('/buy');
        }
    }
}
</script>

<style>
.sale-banner-style {
    background-color: #FF9425;
    color: white;
    text-align: center;
    padding: 5px 0px 5px 0px;
    font-style: bold;
}

.push-to-store {
    text-decoration: underline;
}
.push-to-store:hover {
    cursor: pointer;
}

</style>