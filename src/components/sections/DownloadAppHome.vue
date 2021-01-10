<template lang="html">
  <section>
    <div class="download-the-app  ">
      <div class="download-text">
        <div class="download-header center-content">
          <h1>download the <span style="color: #b188b9" >Fonz Music</span> app</h1>
        </div>

        <div class="app-icons row">
          <div class="apple-store col-md-6">
            <a
              href="https://apps.apple.com/us/app/fonz-music/id1537308329"
              target="_blank">
                <img 
                  src="@/assets/images/appStoreButton.png" 
                  alt="logo" 
                  class="app-button"
                />
            </a>
          </div>
          <div class="play-store col-md-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.fonzmusic.fonz&hl=en_US&gl=US"
              target="_blank">
                <img 
                  src="@/assets/images/googlePlayButton.png" 
                  alt="logo" 
                  class="app-button"
                />
            </a>
          </div>
          
        </div>
      </div>
      <!-- image -->
      <div>
    
  </div>
       <div class="app-screenshot center-content">
      <carousel :perPageCustom="[[768, 3], [1024, 4]]">
        <!-- <slide> <img 
          src="@/assets/images/appScreenshots/appShot1.png" 
          alt="logo" 
          class="app-button"
        /> </slide>
        <slide> <img 
          src="@/assets/images/appScreenshots/appShot2.png" 
          alt="logo" 
          class="app-button"
        /> </slide> -->
        <slide> <img 
          src="@/assets/images/appScreenshots/appShot5.png" 
          alt="logo" 
          class="app-button"
        /> </slide>
        <slide> <img 
          src="@/assets/images/appScreenshots/appShot6.png" 
          alt="logo" 
          class="app-button"
        /> </slide>
        <slide> <img 
          src="@/assets/images/appScreenshots/appShot3.png" 
          alt="logo" 
          class="app-button"
        /> </slide>
        <slide> <img 
          src="@/assets/images/appScreenshots/appShot4.png" 
          alt="logo" 
          class="app-button"
        /> </slide>
        
        <slide> <img 
          src="@/assets/images/appScreenshots/appShot7.png" 
          alt="logo" 
          class="app-button"
        /> </slide>
      </carousel>
      <!--  <c-carousel :active="1">
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
        </c-carousel> -->
      </div> 
    </div>
  </section>
</template>

<script>
import CCarousel from "@/components/elements/Carousel.vue";
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";
import CCarouselItem from "@/components/elements/CarouselItem.vue";
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    CCarousel,
    CCarouselItem,
    Carousel,
    Slide,
    CButton,
    CImage
  },
  
  data(){
    return {
      
    }
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
.app-button {
  margin: 20px auto;
  padding-left: 20px;
  padding-right: 20px;
}
.app-icons {
  padding-top: 50px;
}
.app-shot-item {
  max-width: 300px;
}
.carousel-bullets {
  padding-top: 300px;
  display: inline-flex;
}
.app-screenshot {
  max-width: 900px
}
</style>
