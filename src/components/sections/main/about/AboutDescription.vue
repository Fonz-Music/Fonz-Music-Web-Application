<template>
  <section class="section">
      <div class="section-inner">
          <div class="container">
              <div class="row">
              <div class="col-7">
                  <div class="description-subheader">
                      making music easier
                  </div>
                  <div class="description-header">
                      can i play a song?
                  </div>
                  <div class="description-text">
                      <div style="font-weight: 700; padding-bottom: 10px;"> 
                      After spending hours listening to our favourite tracks and sharing our music tastes, 
                      we wanted a way to make playing and sharing our favourite tunes easier. Starting from 
                      the problem, we brainstormed solutions and found fonz music.
                      </div>
                      <div>
                      Fonz music allows your guests to choose the next song to play - this is achieved through 
                      your Spotify 'queue'. No more phone unlocking, no awkward conversations, and no time wasted. 
                      Everyone is able to play what they want, when they want, easily, all while you're still in control.
                      </div>
                  </div>
              </div>    
              <div class="col-5">
                  <img src="@/assets/images/phoneMockup-01.png">
              </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'AboutDescription',
}
</script>

<style>
.description-subheader {
    color: #ff9425;
    font-size: 16px;
}

.description-header {
    font-size: 24px;
    color: #363636;
    font-weight: 700;
}

.description-text {
    font-size: 14px;
    color: #707070;
}
</style>