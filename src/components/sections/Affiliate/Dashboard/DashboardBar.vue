<template>
    <section class="section">
          <div class="container">
            <div class="row bar-background justify-content-center">
              
              <div class="col-3 inner-padding">
                <div class="row tile-background">

                  <div class="col">
                    <div class="row-12">
                      <span> total affiliate income </span>
                    </div>
                    <div class="row">
                      <div class="col-8">
                       <p> €{{ sumIncome().toFixed(2) }} </p>
                      </div>
                      <div class="col-4">
                        <c-image
                        :src="require('@/assets/images/affiliateProgram/affiliateIcons-01.svg')"
                        alt="Feature tile icon 01"
                        :width="72"
                        :height="72" 
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-3 inner-padding">
                <div class="row tile-background">

                  <div class="col">
                    <div class="row-12">
                      <span> total withdrawals </span>
                    </div>
                    <div class="row">
                      <div class="col-8">
                       <p> €0.00 </p>
                      </div>
                      <div class="col-4">
                        <c-image
                        :src="require('@/assets/images/affiliateProgram/affiliateIcons-02.svg')"
                        alt="Feature tile icon 01"
                        :width="72"
                        :height="72" 
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="col-3 inner-padding">
                <div class="row tile-background">

                  <div class="col">
                    <div class="row-12">
                      <span> available withdrawals </span>
                    </div>
                    <div class="row">
                      <div class="col-8">
                       <p> €0.00 </p>
                      </div>
                      <div class="col-4">
                        <c-image
                        :src="require('@/assets/images/affiliateProgram/affiliateIcons-03.svg')"
                        alt="Feature tile icon 01"
                        :width="72"
                        :height="72" 
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="col-3 inner-padding">
                <div class="row">

                  <div class="col">
                    <div class="row-12">
                      <span> pending withdrawawls </span>
                    </div>
                    <div class="row">
                      <div class="col-8">
                       <p> €{{ sumIncome().toFixed(2) }} </p>
                      </div>
                      <div class="col-4">
                        <c-image
                        :src="require('@/assets/images/affiliateProgram/affiliateIcons-04.svg')"
                        alt="Feature tile icon 01"
                        :width="72"
                        :height="72" 
                        />
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
import CImage from "@/components/elements/Image.vue"

export default {
    name:"DashboardBar",
    components: {
        CImage
    },

    props: [
        'referrals'
    ],

    methods: {
      sumIncome() {
        var total = 0;
        this.referrals.forEach((referral) => {
          total += referral.affiliateEarning 
        });
        return total;
      }
    }
}
</script>


<style scoped>
    .tile-background {
        border-right: solid 1px;
        border-color: lightgrey !important;
    }

    .inner-padding {
      padding: 20px;
    }

    .bar-background {
      border-right: solid 1px;
      border-top: solid 1px;
      border-left: solid 1px;
      border-color: lightgrey !important;
    }
</style>