<template>
  <fragment>
    <c-splash />
    <c-splash-blocks />
    <c-download-app />
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutDefault.vue";
import CSplash from "@/components/sections/HomeSections/Splash.vue";
import CSplashVideo from "@/components/sections/HomeSections/SplashVideo.vue";
import CButton from "@/components/elements/Button.vue";
import CSplashBlocks from "@/components/sections/HomeSections/SplashBlocks.vue";
import CDownloadApp from "@/components/sections/HomeSections/DownloadApp.vue";
import EmailSignup from "@/components/sections/EmailSignupComp.vue";

import CImage from "@/components/elements/Image.vue";

export default {
  name: "Home",
  components: {
    CImage,
    CButton,
    CSplash,
    CSplashBlocks,
    CSplashVideo,
    CDownloadApp,
    EmailSignup,
  },

  methods: {
    eventPageViewHome() {
      firebase.analytics().logEvent("page_view", {
        page_location: "http://web.fonzmusic.com",
        page_path: "/",
        page_title: "Home",
      });
      console.log("home event logged");
    },
  },

  beforeMount() {
    this.eventPageViewHome();
  },

  data() {
    return {
      genericSection01Header: {
        title: "making music a more collaborative experience",
        paragraph:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.",
      },
      videoModalActive: false,
    };
  },
  created() {
    this.$emit("update:layout", CLayout);
  },
};
</script>

<style media="screen">
  .buy-now-bottom-button {
    margin: auto !important;
    max-width: 400px;
    padding-top: 50px;
  }
  .buttonBuyNow {
    text-align: center !important;
        
  }
  .buttonBuyNow a{
    text-align: center !important;
    /* background-color: #b188b9; */
    font-size: 18px;

}


  
</style>
