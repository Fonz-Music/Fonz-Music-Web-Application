<template lang="html">
  <div class="guest-joins-session row">
    <div class="host-connect-text col-md-6">
      <h3 style="color: #b188b9">GUESTS</h3>
      <h3>then tap the</h3>
      <h3>coaster to</h3>
      <h3>JOIN</h3>
      <h3>their <span style="color: #ff9425">HOST</span>&apos;s</h3>
      <h3>session</h3>
    </div>
    <div class="coaster-graphic col-md-6  ">
      <c-image
        :src="require('@/assets/images/Icons/guestTapsCoasterSpotify.png')"
        alt="Spotify pointing to Fonz Coaster"
        style="margin: 30px 0;"
      />
    </div>
    <hr style="width:100%;text-align:left;margin-left:0" />
  </div>
</template>

<script>
import CImage from "@/components/elements/Image.vue";
export default {
  name: "GuestJoinsSession",
  components: {
    CImage
  }
  // computed: {
  //   is_mobile() {
  //     const isMobile = window.matchMedia("only screen and (max-width: 760px)");
  //     console.log(isMobile.matches);
  //     // return isMobile.matches ? true : false;
  //     return true;
  //   }
  // }
};
</script>

<style lang="css" scoped>
/* .host-connects-spotify {
  max-height: 300px;
} */
.guest-joins-session h3 {
  font-family: "MuseoSans300";
  margin: 10px;
}
</style>
