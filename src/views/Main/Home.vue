<template>
  <fragment>
    <c-gradient/>
    <c-splash/>
    <c-splash-blocks/>
    <c-map/>
    <c-download-app/>
  </fragment>
</template>

<script>
import CLayout from "@/layouts/layoutMain.vue";
import CSplash from "@/components/sections/main/home/Splash.vue";
import CSplashBlocks from "@/components/sections/main/home/SplashBlocks.vue";
import CDownloadApp from "@/components/sections/main/home/DownloadApp.vue";
import CGradient from "@/components/sections/main/home/Gradient.vue";
import CMap from "@/components/sections/main/home/Map.vue";

export default {
  name: "Home",
  components: {
    CSplash,
    CSplashBlocks,
    CDownloadApp,
    CGradient,
    CMap
  },

  beforeMount() {
    this.eventPageViewHome();
  },

  created() {
    this.$emit("update:layout", CLayout);
  },

  methods: {
    // Google Analytics //
    eventPageViewHome() {
      firebase.analytics().logEvent("page_view", {
        page_location: "http://web.fonzmusic.com",
        page_path: "/",
        page_title: "Home",
      });
      console.log("home event logged");
    },
  },
};
</script>
