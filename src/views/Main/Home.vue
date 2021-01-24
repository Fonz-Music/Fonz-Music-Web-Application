<template>
  <fragment>
    <c-splash/>
    <c-splash-blocks/>
    <c-download-app/>
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";
// import section header
// import sections
import CSplash from "@/components/sections/HomeSections/Splash.vue";

import CSplashBlocks from "@/components/sections/HomeSections/SplashBlocks.vue";

import CDownloadApp from "@/components/sections/HomeSections/DownloadApp.vue";

// import some required elements
import CImage from "@/components/elements/Image.vue";


export default {
  name: "Home",
  components: {
    CImage,
    CSplash,
    CSplashBlocks,
    CDownloadApp
  },

  methods: {
    eventPageViewHome() {
      firebase.analytics().logEvent("page_view", {
        page_location: "http://web.fonzmusic.com",
        page_path: "/",
        page_title: "Home"
      });
      console.log("home event logged");
    }
  },

  beforeMount() {
    this.eventPageViewHome();
  },

  data() {
    return {
      genericSection01Header: {
        title: "making music a more collaborative experience",
        paragraph:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui."
      },
      videoModalActive: false
    };
  },
  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
