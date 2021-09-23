<template>
  <section class="section">
    <div class="container">
      <div class="row">

        <div class="col-4">
          <div class="affiliate-tile-inner">
            <div class="row">
              <div class="col d-flex justify-content-center">
                <c-image 
                :src="require('@/assets/images/affiliateProgram/infoIcons-01.svg')"
                :width="84"
                />
              </div>
            </div>
            <div class="row">
              <div class="col affiliate-instruction">
                <div class="row justify-content-center">
                  <span style="font-weight:bold; color:grey;"> Sign Up </span>
                </div>
                <div class="row affiliate-tile-style justify-content-center">
                  <span> Join the Fonz Affiliate Network
                  with your e-mail and become a part
                  of our influencer team </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="affiliate-tile-inner">
            <div class="row">
              <div class="col d-flex justify-content-center">
                <c-image 
                :src="require('@/assets/images/affiliateProgram/infoIcons-02.svg')"
                :width="84"
                />
              </div>
            </div>
            <div class="row">
              <div class="col affiliate-instruction">
                <div class="row justify-content-center">
                  <span style="font-weight:bold; color:grey;"> Share </span>
                </div>
                <div class="row affiliate-tile-style justify-content-center">
                  <span> Share Fonz with your friends,
                  family and others in person or
                  online! 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="affiliate-tile-inner">
            <div class="row">
              <div class="col d-flex justify-content-center">
                <c-image 
                :src="require('@/assets/images/affiliateProgram/infoIcons-03.svg')"
                :width="84"
                />
              </div>
            </div>
            <div class="row">
              <div class="col affiliate-instruction">
                <div class="row justify-content-center">
                  <span style="font-weight:bold; color:grey;"> Earn </span>
                </div>
                <div class="row affiliate-tile-style justify-content-center">
                  <span> For every individual that buys
                  a Fonz Coaster using your
                  custom affiliate code, you earn
                  a percentage of that sale! 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
</template>

<script>
import CImage from "@/components/elements/Image.vue";

export default {
  name: 'AffiliateTiles',
  components: {
    CImage
  }
}
</script>

<style scoped>
  .affiliate-tile-inner {
    padding: 15px;
  }

  .affiliate-instruction {
    text-align: center;
  }

  .affiliate-tile-style {
    font-size: 18px;
  }
</style>