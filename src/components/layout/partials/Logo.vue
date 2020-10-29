<template>
  <div class="brand">
    <h1 class="m-0">
      <router-link to="/">
        <c-image
          class="logo"
          :src="require('@/assets/images/logo.svg')"
          alt="Neon"
          :width="64"
          :height="64"
        />
        <!-- <img src="@/assets/images/logo.svg" alt="logo" /> -->
      </router-link>
    </h1>
  </div>
</template>

<script>
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CLogo",
  components: {
    CImage
  }
};
</script>

<style media="screen">
.logo {
  margin: 10px auto;
  width: 15%;
  max-width: 100px;
}
</style>
