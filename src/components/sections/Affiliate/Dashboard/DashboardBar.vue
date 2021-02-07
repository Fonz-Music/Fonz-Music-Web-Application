<template>
    <section class="section">
        <div class="section-inner">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col tile-spacing tile-background">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <p> total affiliate income </p>
                                    <p> €{{ sumIncome().toFixed(2) }} </p>
                                </div>
                                <div class="col-4">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-01-black.svg')"
                                        alt="Feature tile icon 01"
                                        :width="72"
                                        :height="72" 
                                    />
                                </div>
                            </div>
                    </div>

                    <div class="col tile-spacing tile-background">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <p> total withdrawn </p>
                                    <p> €0.00 </p>
                                </div>
                                <div class="col-4">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-01-black.svg')"
                                        alt="Feature tile icon 01"
                                        :width="72"
                                        :height="72" 
                                    />
                                </div>
                            </div>
                    </div>

                    <div class="col tile-spacing tile-background">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <p> available withdrawals </p>
                                    <p> €0.00 </p>
                                </div>
                                <div class="col-4">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-01-black.svg')"
                                        alt="Feature tile icon 01"
                                        :width="72"
                                        :height="72" 
                                    />
                                </div>
                            </div>
                    </div>

                    <div class="col tile-spacing tile-background">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <p> pending withdrawals </p>
                                    <p> €{{ sumIncome().toFixed(2) }} </p>
                                </div>
                                <div class="col-4">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-01-black.svg')"
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
        })

        return total;
      }
    }
}
</script>


<style scoped>
    .tile-background {
        border: solid 1px;
        border-radius: 5px;
        border-color: lightgrey !important;
    }

    .tile-spacing {
        margin: 10px;
    }

    .tile-padding {
    }

    .tile-row-spacing {
        margin: 0px;
    }

    .tile-inner {
        margin: 10px;
    }
</style>