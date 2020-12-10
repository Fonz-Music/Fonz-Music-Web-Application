<template lang="html">
  <div class="host-connects-spotify row">
    <div class="host-connect-text col-md-6">
      <h3 style="color: #ff9425">HOST</h3>
      <h3>connects their</h3>

      <h3 style="color: green">Spotify</h3>
      <h3>to their</h3>
      <h3>Fonz Coaster</h3>
    </div>
    <div class="coaster-graphic col-md-6">
      <c-image
        :src="require('@/assets/images/Icons/spotifyToCoaster.png')"
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
  name: "HostConnectsSpotify",
  components: {
    CImage
  }
};
</script>

<style lang="css" scoped>
/* .host-connects-spotify {
  max-height: 300px;
} */
.host-connect-text h3 {
  font-family: "MuseoSans300";
  margin: 10px;
}
</style>
