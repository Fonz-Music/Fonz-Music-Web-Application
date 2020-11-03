<template>
  <fragment>
    <div class="center-content">
      <c-features-split invert-mobile top-divider image-fill class="" />
    </div>
    <c-host-instructions top-divider class="center-content" />
    <c-guest-instructions top-divider class="center-content" />
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAlternative.vue";
// import section header
// import sections
import CGuestInstructions from "@/components/sections/GuestInstructions.vue";
import CHostInstructions from "@/components/sections/HostInstructions.vue";
import CFeaturesSplit from "@/components/sections/FeaturesSplit.vue";
// import some required elements

export default {
  name: "Secondary",
  components: {
    CGuestInstructions,
    CHostInstructions,
    CFeaturesSplit
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
      firebase.analytics().logEvent('page_view', {
        page_location: 'http://web.fonzmusic.com/',
        page_path: '/about',
        page_title: 'About'
      });
      console.log('about event logged');
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
