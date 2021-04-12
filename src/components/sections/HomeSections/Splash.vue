<template>
  <section class="section" style="max-height: 1200px;"> 
    <div class="section-inner">
    <div class="container">
      <div class="row mobile-align-centre">
        <!-- Copy -->
        <div class="col-md-5 col-sm-12">
          <h1 class="row-12 mt-0 mb-4 reveal-from-bottom" data-reveal-delay="150">
            <span style="color: white;">make a good party <br/> a <span style="color: #FF9425"> great </span> one </span>
          </h1>
          <span class="row-12 mt-4 mb-4 reveal-from-bottom" style="color: white; font-size: 16px; line-height: .5;" data-reveal-delay="160">
            Requesting songs is a pain. We're here to make it easier.
            With the Fonz Coaster, your guests can queue a song through a single tap. It's that easy. 
          </span>

          <div class="row-12 mt-4 mb-24" data-reveal-delay="450">
                  <c-button
                  class="button-style"
                  color="primary"
                  >
                    <router-link to="/buy/"> buy now </router-link>
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

        <div class="row d-flex justify-content-center" style="padding-top: 20px; padding-right: 20px; padding-left: 20px;">
          <div style="col-md-12 col-sm-6">
            <c-clients/>
          </div>
        </div>

        <div class="row justify-content-center">
            <div style="padding-top: 20px;">
            <c-image
            :src="require('@/assets/images/Icons/orangeArrowDown.svg')"
            :height="50"
            :width="50"
            />
            </div>
        </div>

      </div>
  </section>
</template>

<script>
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";
import CClients from "@/components/elements/Home/Clients.vue";


export default {
  name: "CSplash",
  components: {
  CButton,
  CImage,
  CClients,
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .mobile-align-centre {
		text-align: center !important;
    margin: auto !important; 
  }
}

.button-style {
  border-radius: 2px;
}

.button-style:hover {
  color: grey;
}

</style>
