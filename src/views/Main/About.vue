<template>
  <fragment>
    <c-about-splash/>
    <c-about-description/>
    <c-about-partners/>
    <c-about-team/>
    <c-about-contact/>
  </fragment>
</template>

<script>
import CAboutSplash from "@/components/sections/main/about/AboutSplash.vue";
import CAboutDescription from "@/components/sections/main/about/AboutDescription.vue";
import CAboutPartners from "@/components/sections/main/about/AboutPartners.vue";
import CAboutTeam from "@/components/sections/main/about/AboutTeam.vue";
import CAboutContact from "@/components/sections/main/about/AboutContact.vue";
import CLayout from "@/layouts/LayoutDefault.vue";

export default {
  name: "Secondary",
  components: {
    CAboutSplash,
    CAboutDescription,
    CAboutPartners,
    CAboutTeam,
    CAboutContact
  },
  data() {
    return {
      genericSection01Header: {
        title: "How does Fonz work?"
      },
      demoModalActive: false
    };
  },

  methods: {
    eventPageViewAbout() {
      firebase.analytics().logEvent("page_view", {
        page_location: "http://web.fonzmusic.com/",
        page_path: "/about",
        page_title: "About"
      });
      console.log("about event logged");
    }
  },

  beforeMount() {
    this.eventPageViewAbout();
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
