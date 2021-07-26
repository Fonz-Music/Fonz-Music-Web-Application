<template>
  <section class="section"> 

  <div class="gradient-background">
    <img src="@/assets/images/homeGradient.svg"/>
  </div> 

  <div class="section-inner splash-margin-mob splash-margin">

    <div class="container">
      
      <div class="row mobile-align-centre">
        <!-- Copy -->
        <div class="col-md-5 col-sm-12">
          <h1 class="row-12 mt-0 mb-4 reveal-from-bottom" data-reveal-delay="150">
            <span style="color: white;">make a good party <br/> a <span style="color: #FF9425"> great </span> one </span>
          </h1>
          <span class="row-12 mt-4 mb-4 reveal-from-bottom" style="color: white; font-size: 18px; line-height: .5;" data-reveal-delay="160">
            requesting songs is a pain. we're here to make it easier.
            with the Fonz Coaster, your guests can queue a song through a single tap. it's that easy. 
          </span>

          <div class="row-12 mt-4 mb-24" data-reveal-delay="450">
                  <c-button
                  @click="pushToStore()"
                  class="button-style"
                  color="primary"
                  >
                    <span> buy now </span>
                  </c-button>
              </div>
            </div>
            <!-- Image -->
            <div class="col-md-7 col-sm-12">
              <c-image
              :src="require('@/assets/images/splashImage.png')"
              alt="Splash Graphic"
              :width="2000"
              />
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CSplash",
  components: {
  CButton,
  CImage,
  },

  methods: {
    pushToStore() {
      this.$router.push("buy");
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .mobile-align-centre {
		text-align: center !important;
    margin: auto !important; 
  }
  .splash-margin {
    margin-top: 30px;
  }
}

@media (min-width: 767px) {
  .splash-margin {
    margin-top: 120px;
  }
}

.button-style {
  border-radius: 2px;
}

.button-style:hover {
  color: grey;
}

.gradient-background {
  position: absolute;
  top: 0px;
  width: 100%;
  min-width: 1800px;
  overflow: hidden;
}
</style>
