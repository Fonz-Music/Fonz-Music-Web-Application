<template>
  <section class="section" style="margin-top: 100px;">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-8">
          <h3 style="color:#ff9425"> the benefits </h3>
          <h2 style="color: #212124"> bring your party to the next level </h2>
          <p> fonz will ensure your guests have the time of their lives. after all, who doesn't love hearing
          their favourite song come on? </p>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="section-background card-text reveal-rotate-from-left">
            <img src="@/assets/images/SplashImages/splashArtwork-01.png"/>
            <h5 style="color:#ff9425">  you keep control </h5>
            <p> unlike spotify sessions, the host still has complete control of what's playing. this means that no one
              can hijack the session - or simply put, you can skip a song people aren't vibing with. </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="section-background card-text reveal-rotate-from-right">
            <img src="@/assets/images/SplashImages/splashArtwork-02.png"/>
            <h5 style="color:#ff9425;"> no premium? no problem </h5>
            <p> only the host of the session needs spotify premium. as long as your guests have the fonz app and a working
              internet connection, they can queue up music to their heart's content. </p>
          </div>
        </div>

        <div class="col-md-4 col-sm-12">
          <div class="section-background card-text reveal-rotate-from-left">
            <img src="@/assets/images/SplashImages/splashArtwork-03.png"/>
            <h5 style="color:#ff9425"> fire and forget </h5>
            <p> no need to restart the party every time the spotify app crashes, your phone dies or the party ends.
              once you're hooked up to a fonz coaster, you're set (until you disconnect manually!) </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "howFonzWorks"
}
</script>

<style>
.section-background {
  background-color: white;
  padding: 18px;
  border-radius: 20px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.09) 0 6px 9px 0; 
}

.card-text {
  text-align: center;
  font-size: 16px;
}
</style>