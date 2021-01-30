<template>
    <section class='section'>
        <div class='section-inner'>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="table-responsive-md">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"> AMOUNT </th>
                                    <th scope="col"> CURR </th>
                                    <th scope="col"> QTY </th>
                                    <th scope="col"> COUPON </th>
                                    <th scope="col"> EMAIL </th>
                                    <th scope="col"> RETAIL </th>
                                    <th scope="col"> DISCOUNT </th>
                                    <th scope="col"> EARNINGS </th>
                                    <th scope="col"> DETAILS </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="referral in referrals" :key="referral.transactionId">
                                    <td> {{ referral.price }} </td>
                                    <td> {{ referral.currency }} </td>
                                    <td> {{ referral.quantity }} </td>
                                    <td> {{ referral.coupon }} </td>
                                    <td> {{ referral.email }} </td>
                                    <td> {{ referral.retailPrice }} </td>
                                    <td> {{ referral.discount }} </td>
                                    <td> {{ referral.affiliateEarning }} </td>
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

                    <c-modal :active.sync="showDetails">
                        <h2 class="mt-0"> Transaction Details </h2>
                        <div class="container">
                            <div class="row">
                                <div class="col"> <p> Transaction ID: </p> </div>
                                <div class="col"> <p> {{ currentReferral.transactionId }} </p> </div>
                            </div>
                            <div class="row mt-0">
                                <div class="col"> <p> Package ID: </p> </div>
                                <div class="col"> <p> {{ currentReferral.packageId }} </p> </div>
                            </div>
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
            currentReferral: {}
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

</style>