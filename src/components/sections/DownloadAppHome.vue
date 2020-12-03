<template lang="html">
  <section>
    <div class="download-the-app row ">
      <div class="download text col-6">
        <div class="download-header center-content">
          <h3>download the fonz app</h3>
        </div>

        <div class="app-icons row">
          <div class="apple-store col-6 center-content">
            <c-button
              class="center-content"
              tag="a"
              href="https://apps.apple.com/us/app/fonz-music/id1537308329"
              target="_blank"
            >
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
      <div class="app-screenshot col-6 center-content">
        <c-carousel :active="1">
          <c-carousel-item
            ><c-image
              class="app-shot-item"
              :src="
                require('@/assets/images/appScreenshots/hostScreenShot.png')
              "
              alt="Splash Coaster"
          /></c-carousel-item>
          <c-carousel-item
            ><c-image
              class="app-shot-item"
              :src="require('@/assets/images/appScreenshots/appHomeScreen.png')"
              alt="Splash Coaster"
          /></c-carousel-item>

          <c-carousel-item
            ><c-image
              class="app-shot-item"
              :src="
                require('@/assets/images/appScreenshots/guestScreenShot.png')
              "
              alt="Splash Coaster"
          /></c-carousel-item>
        </c-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import CCarousel from "@/components/elements/Carousel.vue";
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";
import CCarouselItem from "@/components/elements/CarouselItem.vue";
export default {
  components: {
    CCarousel,
    CCarouselItem,
    CButton,
    CImage
  }
};
</script>

<style lang="css" scoped>
.download-the-app {
  max-width: 900px;
  min-height: 400px;
  margin: 50px auto;
}
.carousel-items {
  min-height: 300px;
}
.carousel-item {
  display: block;
}
.app-icons {
  padding-top: 100px;
}
.app-shot-item {
  max-height: 300px;
}
.carousel-bullets {
  padding-top: 300px;
  display: inline-flex;
}
.app-screenshot {
}
</style>
