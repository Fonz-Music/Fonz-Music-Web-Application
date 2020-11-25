<template lang="html">
  <section>
    <div class="download-the-app">
      <div class="download text">
        <div class="download-header center-content">
          <h3>download the fonz app</h3>
        </div>

        <div class="app-icons row">
          <div class="apple-store col-6 center-content">
            <c-button class="center-content" tag="a" href="#">
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
      // image
      <div class="app-screenshot"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.download-the-app {
  max-width: 900px;
  margin: 50px auto;
}
</style>
