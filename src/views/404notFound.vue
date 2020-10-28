<template>
  <div class="page-not-found-page">
    <fragment>
      <PageNotFound />
    </fragment>
  </div>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAlternative.vue";

import PageNotFound from "@/components/sections/PageNotFound.vue";
// import CHeroFull02 from "@/components/sections/HeroFull02.vue";

export default {
  name: "PageNotFoundPage",
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
  }
};
</script>
<style media="screen">
.page-not-found-page {
  min-height: 600px;
}
</style>
