<template lang="html">
  <div class="page-404 center-content">
    <h3 class="text-center uh-oh-header">uh-oh!</h3>
    <p>think you took a wrong turn... <br> maybe you're looking for our app?</p>

    <div style="padding: 10px 0px 0px 0px;">
      <a href="https://apps.apple.com/ie/app/fonz-music/id1537308329">
        <img src='@/assets/images/DownloadApp/downloadAppStore.svg'/>
      </a>
    </div>
    <div style="padding: 0px 0px 0px 0px">
      <a href="https://play.google.com/store/apps/details?id=com.fonzmusic.fonz&hl=enDownloadAppgl=US">
        <img style='max-width:140px;' href='https://google.com' src='@/assets/images/DownloadApp/googlePlayStore.svg'/>
      </a>
    </div>

    <div style="padding-top: 50px;">
      <router-link class="go-back-button" to="/" tag="button"
        >go home</router-link
      >
    </div>

  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  components: {
  },
  methods: {
  }
};
</script>

<style lang="css" scoped>
.page-404 {
  padding-top: 200px;
}
.uh-oh-header {
  color: #ff9425;
}
.go-back-button {
  background-image: linear-gradient(to bottom right, #6c3a93, #d55963);  color: white;
  width: 125px;
  height: 35px;
  border-radius: 10px;
}
</style>
