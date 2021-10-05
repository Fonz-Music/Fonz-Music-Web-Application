<template>
  <fragment>
    <meta
      name="apple-itunes-app"
      content="app-id=1537308329, app-clip-bundle-id=com.fonzmusic.Clip"
    />
    <c-splash />
    <c-clients />
    <c-how-fonz-works />
    <c-the-benefits />
    <c-map />
    <c-download-app />
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutDefault.vue";

import CHowFonzWorks from "@/components/sections/main/home/howFonzWorks.vue";
import CTheBenefits from "@/components/sections/main/home/theBenefits.vue";
import CClients from "@/components/sections/main/home/Clients.vue";

import CSplash from "@/components/sections/main/home/Splash.vue";
import CDownloadApp from "@/components/sections/main/home/DownloadApp.vue";
import CMap from "@/components/sections/main/home/Map.vue";

export default {
  name: "Home",
  components: {
    CSplash,
    CDownloadApp,
    CHowFonzWorks,
    CTheBenefits,
    CMap,
    CClients,
  },

  beforeMount() {
    this.eventPageView();
  },

  created() {
    this.$emit("update:layout", CLayout);
  },

  methods: {
    // Google Analytics //
    eventPageView() {
      firebase.analytics().logEvent("page_view", {
        page_location: "http://web.fonzmusic.com",
        page_path: "/",
        page_title: "Home",
      });
    },
  },
};
</script>
