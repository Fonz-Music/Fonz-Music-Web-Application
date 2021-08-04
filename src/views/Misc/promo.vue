<template>
  <div class="page-not-found-page">
    <fragment>
      <PageNotFound />
      <h3> just checking </h3>
    </fragment>
  </div>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAlternative.vue";
import PageNotFound from "@/components/sections/misc/PageNotFound.vue";

export default {
  name: "PromoPage",
  components: {
    PageNotFound
  },
  data() {
    return {
      demoModalActive: false
    };
  },
  created() {
    this.$emit("update:layout", CLayout);
  },
  beforeMount() {
    localStorage.setItem("promoFromUrl", this.$route.params.pathMatch);
    // console.log(this.$route); 
    // console.log(this.$route.params.pathMatch);
    // console.log(JSON.stringify(this.$route.query)); 
    console.log("just stored the promo " + this.$route.params.pathMatch);
    this.$router.push('/buy')
  },
};
</script>
<style media="screen">
.page-not-found-page {
  min-height: 600px;
}
</style>
