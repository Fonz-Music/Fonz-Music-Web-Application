<template>
    <section class='section'>
        <div class='section-inner'>
            <div class="container">
                <div class="row justify-content-center">
                    <div v-if="tableLoaded" class="table-responsive-md">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"> AMOUNT </th>
                                    <th scope="col"> CURR </th>
                                    <th scope="col"> QTY </th>
                                    <th scope="col"> EMAIL </th>
                                    <th scope="col"> RETAIL </th>
                                    <th scope="col"> DISCOUNT </th>
                                    <th scope="col"> EARNINGS </th>
                                    <th scope="col"> DETAILS </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr class="table-row-style" v-for="referral in referrals" :key="referral.transactionId">
                                    <td> ${{ referral.price }} </td>
                                    <td> {{ referral.currency }} </td>
                                    <td> {{ referral.quantity }} </td>
                                    <td> {{ referral.email }} </td>
                                    <td> ${{ referral.retailPrice }} </td>
                                    <td> ${{ referral.discount }} </td>
                                    <td> ${{ referral.affiliateEarning }} </td>
                                    <td> 
                                        <button @click='openDetails(); currentReferral = referral'> 
                                            <c-image 
                                            :src="require('@/assets/images/Icons/threeDots.svg')"
                                            :width="12"
                                            :height="6"
                                            />
                                        </button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div v-if="!tableLoaded">
                        <p> Loading... </p>
                    </div>

                    <c-modal :active.sync="showDetails">
                        <h3 class="mt-0"> Transaction Details </h3>
                        <div class="container">

                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td> Coupon: </td>
                                        <td> {{ currentReferral.coupon }} </td>
                                    </tr>
                                    <tr>
                                        <td> Transaction ID: </td>
                                        <td> {{ currentReferral.transactionId }} </td>
                                    </tr>
                                    <tr>
                                        <td> Package ID: </td>
                                        <td> {{ currentReferral.packageId }} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </c-modal>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
const axios = require("axios");
import CModal from  '@/components/elements/Modal.vue'
import CButton from '@/components/elements/Button.vue'
import CImage from '@/components/elements/Image.vue'

export default {
    name:'AffiliateTable',
    components: {
        CModal,
        CButton,
        CImage
    },

    data() {
        return {
            referrals: [],
            showDetails: false,
            currentReferral: {},
            tableLoaded: false
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
                        self.tableLoaded = true;

                    }).catch((error) => {
                        console.error(error)
                    });
                })
            }
            else {
                console.log("No user signed in.")
            }
        },

        openDetails() {
            console.log("clicked");
            this.showDetails = true;
        }
    },

    beforeMount() {
        this.getReferrals();
    }
}
</script>


<style>
    .button-style {
        margin: auto;
    }

    .table-row-style {
        line-height: 10px !important;
    }

</style>