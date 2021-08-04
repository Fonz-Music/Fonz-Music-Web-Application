<template>
  <fragment>
    <c-tutorial/>
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutDefault.vue";
import CTutorial from "@/components/sections/main/about/Tutorial.vue";

export default {
  name: "Secondary",
  components: {
    CTutorial,
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
