<template lang="html">
  <div class="fonz-takes-requests">
    <div class="fonz-request-header">
      <h3>
        Fonz Music allows
      </h3>
      <h3 style="color: #ff9425">HOSTS</h3>
      <h3>to take song requests</h3>
      <h3>from their</h3>
      <h3 style="color: #b188b9">GUESTS</h3>
    </div>
    <div class="like-a-jukebox">
      <h4>
        like a modern-day
        <span style="color: #ff9425; font-size: 35pt;">jukebox</span>
      </h4>
      <!-- <h4 style="color: #ff9425">jukebox</h4> -->
    </div>
    <hr style="width:100%;text-align:left;margin-left:0" />
  </div>
</template>

<script>
export default {
  name: "FonzTakesRequests"
};
</script>

<style lang="css" scoped>
.fonz-request-header h3 {
  font-family: "MuseoSans300";
  margin: 10px;
}
.like-a-jukebox {
  padding: 35px 0;
}
.like-a-jukebox h4 {
  font-family: "MuseoSans300";
  margin: 0;
  font-size: 24pt;
  /* color: #ff9425; */
}
</style>
