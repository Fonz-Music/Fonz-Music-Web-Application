<template lang="html">
  <div class="host-connects-spotify row">
    <div class="guest-queues-text col-md-6">
      <h3 style="color: #b188b9">GUESTS</h3>
      <h3>can then</h3>
      <h3 style="font-family: MuseoSans700"><u>queue</u></h3>
      <h3>a song to their</h3>
      <h3><span style="color: #ff9425">HOST</span>&apos;s</h3>
      <h3 style="color: green">Spotify</h3>
    </div>
    <div class="coaster-graphic col-md-6">
      <c-image
        :src="require('@/assets/images/Icons/queueToSpotify.png')"
        alt="Spotify pointing to Fonz Coaster"
        style="margin: 110px 0;"
      />
    </div>
  </div>
</template>

<script>
import CImage from "@/components/elements/Image.vue";
export default {
  name: "GuestQueuesSong",
  components: {
    CImage
  }
};
</script>

<style lang="css" scoped>
/* .host-connects-spotify {
  max-height: 300px;
} */
.guest-queues-text h3 {
  font-family: "MuseoSans300";
  margin: 10px;
}
</style>
