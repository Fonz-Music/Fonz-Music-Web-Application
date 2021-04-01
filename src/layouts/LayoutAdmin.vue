<template>
  <fragment>
    <div class="background-mountain">
      <c-header-admin nav-position="right" />
      <main class="site-content">
        <slot/>
      </main>
      <c-footer/>
    </div>
  </fragment>
</template>


<script>
import CHeaderAdmin from "@/components/layout/HeaderAdmin.vue";
import CFooter from "@/components/layout/Footer02.vue";

export default {
  components: {
    CHeaderAdmin,
    CFooter,
  }
};
</script>


<style media="screen">
.background-mountain {
  background: url(../assets/images/backgroundMountain.svg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 100%;
}
</style>
