<template>
    <section>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <button @click="updateData(0, 10000000000)"> Refresh </button>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col tile-background tile-spacing">
                        <c-line-chart :chart-data="graphData" :options="chartOptions"/>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
const axios = require("axios");

import CLineChart from "@/components/elements/LineChart.vue"

export default {
    name: 'AffiliateGraph',
    components: {
        CLineChart
    },

    data() {
        return {
            graphData: {},
            salesData: [],
            referrals: [],

            chartOptions: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawBorder: false,
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },

    methods: {
        getReferrals() {
            let self = this
            if(firebase.auth().currentUser) {
                firebase.auth().currentUser.getIdToken().then(function(idToken) {
                    axios.get('https://fonzmusic.com/i/affiliate/referrals', {
                        headers: {
                        Authorization: `Bearer ${ idToken }`
                        }
                    }).then((resp) => {
                        self.referrals = resp.data;
                        self.dataLoaded = true;

                    }).catch((error) => {
                        console.error(error)
                    });
                })
            }
        },

        updateData(startDate, endDate) {
            this.salesData = [];
            this.referrals.forEach((referral) => {
                var timestamp = referral.created._seconds;
                if(timestamp >= startDate && timestamp <= endDate) {
                    this.salesData.push(referral.affiliateEarning);
                }            
            })

            this.graphData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {   
                        label: 'Sales',
                        data: this.salesData
                    }
                ]
            }
        },
    },

    mounted() {
        this.updateData();
    },

    beforeMount() {
        this.getReferrals();
    }
    
}
</script>

<style scoped>
    .tile-background {
        border: solid 1px;
        border-radius: 5px;
        border-color: lightgrey !important;
        background-color: white;
    }

    .tile-spacing {
        margin: 0px 0px 0px 0px;
    }
</style>