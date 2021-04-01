<template>
  <div class="download-background">
    <div class="container container-height container-padding">
      <div class="row row-styling">
        <div class="col-4 container-text-padding">
          <div>
            <span class="text-styling-a"> Fonz Music </span>
          </div>
          <div>
            <span class="text-styling-b"> Download Now </span>
          </div>
          <div class="button-container">
            <c-button href="https://apps.apple.com/ie/app/fonz-music/id1537308329" class="app-button-style"> 
              <span style="color: #FF9425"> App Store </span> &nbsp; 
              <img class="image-sizing" src="@/assets/images/Icons/appStoreOrange.svg"/> 
            </c-button>
            <c-button class="app-button-style"> 
              <span style="color: #FF9425"> Google Play </span> &nbsp; 
              <img class="image-sizing" src="@/assets/images/Icons/googlePlayOrange.svg"/> 
            </c-button>
          </div>
        </div>

        <div class="col-8 container-image-padding">
          <img class="img-style" src="@/assets/images/iPhoneMockup.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from "@/components/elements/Button.vue";
import CButtonGroup from "@/components/elements/ButtonGroup.vue";

export default {
  name: "DownloadApp",
  components: {
    CButton,
    CButtonGroup
  }
};
</script>

<style scoped>
.download-background {
  background-color: #FF9425;
  height: 300px;
}

.img-style {
  height: 300px;
  float: right;
}

.button-container {
  margin-top: 20px;
}

.button-align {
  vertical-align: 100%;
}

.app-button-style {
  margin-right: 20px;
}


.container-image-padding {
  padding-top: 0px;
  padding-bottom: 0px;
  height: 100%;
}

.container-text-padding {
  padding-top: 40px;
}

.image-sizing {
  max-height: 30px;
}

.text-styling-a {
  color: white;
  font-weight: 300;
  font-size: 30px;
}

.text-styling-b {
  color: white;
  font-weight: 700;
  font-size: 40px;
}
</style>