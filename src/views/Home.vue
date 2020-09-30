<template>
  <fragment>
    <c-hero-split class="illustration-section-01" />
    <c-clients top-divider class="center-content" />
    <c-roadmap top-divider class="center-content" />
    <!--          
        <c-generic-section top-divider>
            <div class="container-xs">
                <figure>
                    <c-image
                        class="image-larger"
                        :src="require('@/assets/images/splashcoaster.png')"
                        alt="Splash Coaster"
                        :width="712"
                        :height="400" />
                </figure>
                <h2 class="mt-0 center-the-text">queue the party!</h2>
                <p class="center-the-text">
                    Whether you’re blasting Pitbull at the pre-game, jamming to Kings of Leon on a roadtrip, or vibing to Meghan Trainor with your mates, there’s always a perfect song to play next. 
                </p>
                <p class="center-the-text">
                  But are you sick of interrupting, shoulder tapping, or yelling out that tune?
                </p>

                <h4 class="center-the-text">We certainly are.</h4>
                <p class="center-the-text">
                    So we created Fonz Music, a simpler, more intuitive way to host a party with Spotify or (soon) Apple Music and allow your guests to make song requests.
                </p>
                <p class="center-the-text">
                  Your guests simply open our app, load up the banger of their choice, and tap your Fonz coaster with their phone. That tune is instantly added to your queue.
                </p>
                <p class="center-the-text">
                    Talk about bringing SexyBack.
                </p> 
            </div>
        </c-generic-section>
         -->
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";
// import section header
// import sections
import CHeroSplit from "@/components/sections/HeroSplit.vue";
import CGenericSection from "@/components/sections/GenericSection.vue";
import CClients from "@/components/sections/Clients.vue";
import CRoadmap from "@/components/sections/Roadmap.vue";
// import some required elements
import CImage from "@/components/elements/Image.vue";

export default {
  name: "Home",
  components: {
    CImage,
    CHeroSplit,
    CGenericSection,
    CClients,
    CRoadmap
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
