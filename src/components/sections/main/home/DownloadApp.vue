<template>
  <div class="download-background">
    <div class="container container-height container-padding">
      <div class="row row-styling">
        <div class="col-md-4 col-sm-12 container-text-padding mobile-adapt">
          <div>
            <span class="text-styling-a"> fonz music </span>
          </div>
          <div>
            <span class="text-styling-b"> download now </span>
          </div>
          <div class="button-container justify-content-center">
            <c-button tag="a" href="https://apps.apple.com/ie/app/fonz-music/id1537308329" target="_blank" class="app-button-style"> 
              <span style="color: #FF9425"> app store </span> &nbsp; 
              <img class="image-sizing" src="@/assets/images/Icons/appStoreOrange.svg"/> 
            </c-button>
            <c-button tag="a" href="https://play.google.com/store/apps/details?id=com.fonzmusic.fonz" target="_blank" class="app-button-style"> 
              <span style="color: #FF9425"> google play </span> &nbsp; 
              <img class="image-sizing" src="@/assets/images/Icons/googlePlayOrange.svg"/> 
            </c-button>
          </div>
        </div>

        <div class="col-md-8 col-sm-12 container-image-padding justify-content-center mobile-adapt" style="display: flex;">
          <img class="img-style mobile-image-adapt" src="@/assets/images/iPhoneMockup.png">
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
@media (max-width: 768px) {
  .mobile-adapt {
		text-align: center !important;
    margin: auto !important; 
  }

  .mobile-image-adapt {
    max-height: 150px;
  }
}

.download-background {
  background-color: #FF9425;
  height: 20%;
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
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 5px;
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