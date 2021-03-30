<template>
  <fragment>
    <c-splash />
    <landingpage-video />
    <!-- <c-splash-video/> -->
    <LandingPageVideo />
    <c-splash-blocks />
    <c-download-app />
    <EmailSignup />
    <div class="buy-now-bottom-button" data-reveal-delay="450">
      <div class="buttonBuyNow">
        
      
            <c-button
            tag="a"
            color="primary"
            href="/buy"
            
            >get your coaster here</c-button>
            </div>
    </div>
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";
// import section header
// import sections
import CSplash from "@/components/sections/HomeSections/Splash.vue";
import CButton from "@/components/elements/Button.vue";

import CSplashBlocks from "@/components/sections/HomeSections/SplashBlocks.vue";
import CSplashVideo from "@/components/sections/HomeSections/SplashVideo.vue";
import LandingPageVideo from "@/components/sections/HomeSections/LandingPageVideo.vue";
import CDownloadApp from "@/components/sections/HomeSections/DownloadApp.vue";
import EmailSignup from "@/components/sections/EmailSignupComp.vue";

// import some required elements
import CImage from "@/components/elements/Image.vue";

export default {
  name: "Home",
  components: {
    CImage,
    CButton,
    CSplash,
    CSplashBlocks,
    LandingPageVideo,
    CDownloadApp,
    CSplashVideo,
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
