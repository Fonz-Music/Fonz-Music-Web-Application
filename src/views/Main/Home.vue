<template>
  <fragment>
<<<<<<< HEAD
    <c-hero-split />
    <c-clients top-divider bottom-divider class="center-content" />
    <WhatDoesFonzDoHome />
    <br>
    <DownloadAppHome top-divider/>
    <c-CoasterBuyInfo top-divider />
    
    <!-- <DownloadApp /> -->
    <c-roadmap top-divider class="center-content" />
    
=======
    <c-splash/>
    <c-splash-video/>
    <c-splash-blocks/>
    <c-download-app/>
>>>>>>> 9605ac0130f41d30039df8e1c98e82861b8435dd
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";
// import section header
// import sections
import CSplash from "@/components/sections/HomeSections/Splash.vue";

<<<<<<< HEAD
import CClients from "@/components/sections/Clients.vue";
import CRoadmap from "@/components/sections/Roadmap.vue";
import CCoasterBuyInfo from "@/components/sections/CoasterBuyInfo.vue";
import EmailSignup from "@/components/sections/EmailSignupComp.vue";
=======
import CSplashBlocks from "@/components/sections/HomeSections/SplashBlocks.vue";
import CSplashVideo from "@/components/sections/HomeSections/SplashVideo.vue";
import CDownloadApp from "@/components/sections/HomeSections/DownloadApp.vue";
>>>>>>> 9605ac0130f41d30039df8e1c98e82861b8435dd

// import some required elements
import CImage from "@/components/elements/Image.vue";


export default {
  name: "Home",
  components: {
    CImage,
    CSplash,
    CSplashBlocks,
    CDownloadApp,
    CSplashVideo
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
