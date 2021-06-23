<template>
  <fragment>
    <meta name="apple-itunes-app" content="app-id=1537308329, app-clip-bundle-id=com.fonzmusic.Clip">
    <c-gradient/>
    <c-splash/>
    <c-splash-blocks/>
    <c-map/>
    <c-download-app/>
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutDefault.vue";
import CSplash from "@/components/sections/HomeSections/Splash.vue";
import CSplashBlocks from "@/components/sections/HomeSections/SplashBlocks.vue";
import CDownloadApp from "@/components/sections/HomeSections/DownloadApp.vue";
import CGradient from "@/components/sections/HomeSections/Gradient.vue";
import CMap from "@/components/sections/HomeSections/Map.vue";

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
