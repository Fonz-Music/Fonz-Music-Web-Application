<template lang="html">
  <section>
    <div class="download-the-app">
      <div class="download text">
        <div class="download-header center-content">
          <h3>download the fonz app</h3>
        </div>

        <div class="app-icons row">
          <div class="apple-store col-6 center-content">
            <c-button class="center-content" tag="a" href="#">
              <font-awesome-icon class="icon" :icon="['fab', 'app-store']" />
              App Store
            </c-button>
          </div>
          <div class="play-store col-6 center-content">
            <c-button class="center-content" tag="a" href="#">
              <font-awesome-icon class="icon" :icon="['fab', 'google-play']" />
              Google Play
            </c-button>
          </div>
        </div>
      </div>
      <!-- image -->
      <!-- <div class="app-screenshot">
        <c-carousel :active="0">
          <c-carousel-item
            ><c-image
              class="image-larger"
              :src="require('@/assets/images/splashGraphic.png')"
              alt="Splash Coaster"
              :width="712"
              :height="400"
          /></c-carousel-item>
          <c-carousel-item
            ><c-image
              class="logo"
              :src="require('@/assets/images/logo.svg')"
              alt="Neon"
              :width="64"
              :height="64"
          /></c-carousel-item>
        </c-carousel>
      </div> -->
    </div>
  </section>
</template>

<script>
import CCarousel from "@/components/elements/Carousel.vue";
import CButton from "@/components/elements/Button.vue";
import CCarouselItem from "@/components/elements/CarouselItem.vue";
export default {
  components: {
    CCarousel,
    CCarouselItem,
    CButton
  }
};
</script>

<style lang="css" scoped>
.download-the-app {
  max-width: 900px;
  margin: 50px auto;
}
.app-screenshot {
}
</style>
