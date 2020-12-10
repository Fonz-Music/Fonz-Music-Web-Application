<template>
  <fragment>
    <c-hero-split />
    <c-clients top-divider bottom-divider class="center-content" />
    <WhatDoesFonzDoHome />
    <c-CoasterBuyInfo top-divider />
    <DownloadAppHome />
    <!-- <DownloadApp /> -->
    <c-roadmap top-divider class="center-content" />
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";
// import section header
// import sections
import CHeroSplit from "@/components/sections/HeroSplit.vue";

import CClients from "@/components/sections/Clients.vue";
import CRoadmap from "@/components/sections/Roadmap.vue";
import CCoasterBuyInfo from "@/components/sections/CoasterBuyInfo.vue";

// import some required elements
import CImage from "@/components/elements/Image.vue";
import DownloadApp from "@/components/sections/DownloadApp.vue";
import DownloadAppHome from "@/components/sections/DownloadAppHome.vue";
import WhatDoesFonzDoHome from "@/components/sections/WhatDoesFonzDoHome.vue";

export default {
  name: "Home",
  components: {
    CImage,
    CHeroSplit,

    CClients,
    CCoasterBuyInfo,
    CRoadmap,
    DownloadApp,
    DownloadAppHome,
    WhatDoesFonzDoHome
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
