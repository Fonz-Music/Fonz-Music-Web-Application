<template>
  <section class="section">
    <div class="section-inner">
    <div class="container">
          <div class="row mobile-align-centre">
            <!-- Copy -->
            <div class="col-md-8 col-sm-12">
              <h1 class="row-12 mt-0 mb-4 reveal-from-bottom" data-reveal-delay="150">
                <span>make a good party <br/> a <span style="color: #FF9425"> great </span> one </span>
              </h1>
              <div class="row-12 mt-0 mb-24" data-reveal-delay="450">
                  <c-button
                  tag="a"
                  color="primary"
                  href="/buy"
                  >buy now</c-button>
              </div>
              <div class="row-sm-12 mobile-align-centre">
                <div class="col-md-10 col-sm-12">
                  <c-clients/>
                </div>
              </div>
            </div>
            <!-- Image -->
            <div class="col-md-4 col-sm-12">
              <c-image
              :src="require('@/assets/images/splashGraphic.png')"
              alt="Splash Graphic"
              :width="700"
              :height="388"
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

</style>
