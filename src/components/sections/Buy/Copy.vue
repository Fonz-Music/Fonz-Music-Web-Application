<template>
  <section>
    <div class="container" style="padding-top: 80px;">
      <div class="row">
        <div class="col-12 mobile-adapt reveal-from-bottom">
          <span style="font-size: 32px; color: black; font-weight: 700;"> someone queue a song! </span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 col-sm-12 mobile-adapt reveal-from-top">
        <span style="font-size: 18px;"> 
          We've all been there. <br>
          You're a people pleaser. Although your music taste is elite, some people aren't as fortunate to be blessed with such an immaculate choice of songs. <br>
          You're sick of the "who put this on" and "can I grab your phone to queue a song". We are too. <br> <br>
          <span style="font-weight: 700;"> And so, the Fonz Coaster comes to save the day. </span> <br> <br>
          Those days are over - the party now belongs to everyone. Join the host's session and get tapping - turn a good party into a great one.
        </span>
        </div>
        <div class="col-md-5 col-sm-12 reveal-from-bottom">
          <c-image :src="require('@/assets/images/SplashImages/splashArtwork-01.png')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CImage from '@/components/elements/Image.vue'

export default {
  name: "Copy",
  components: {
    CImage,
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .mobile-adapt {
		text-align: center !important;
    margin: auto !important;
  }
}
</style>