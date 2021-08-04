<template>
  <div class="page-not-found-page">
    <fragment>
      <PageNotFound />
    </fragment>
  </div>
</template>

<script>
import CLayout from "@/layouts/LayoutAlternative.vue";
import PageNotFound from "@/components/sections/misc/PageNotFound.vue";

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
