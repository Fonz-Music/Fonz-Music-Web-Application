<template>
    <div>
        <tr v-for="referral in referrals" :key="referral.transactionId">
            <td> {{ referral.price }} </td>
            <td> {{ referral.currency }} </td>
            <td> {{ referral.quantity }} </td>
            <td> {{ referral.transactionId }} </td>
            <td> {{ referral.packageId }} </td>
            <td> {{ referral.email }} </td>
            <td> {{ referral.retailPrice }} </td>
            <td> {{ referral.discount }} </td>
            <td> {{ referral.affiliateEarning }} </td>
            <td> <c-button color="primary" @click="showModal = true; currentReferral = referral ">Details</c-button></td>
        </tr>
        
        <div>
        <h1> MODAL </h1>
            <c-modal :active.sync="showModal">
                <h3 class="mt-0">Transaction Details</h3>
                <p class="m-0">
                    Transaction ID: {{ currentReferral.transactionId }}
                </p>
            </c-modal>  
        </div>
       
    </div>
</template>

<script>
const axios = require("axios");

import CModal from  '@/components/elements/Modal.vue'
import CButton from '@/components/elements/Button.vue'


export default {
    name:"AffiliateTableRow",
    components: {
        CModal,
        CButton,
    },
    // props: [
    //     CModal
    // ],
    
    // props: [
    //     index = ''
    // ],

    data() {
        return {
            referrals: [],
            showModal: false,
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
                    // DATA CONTAINS THE RAW JSON THAT U CAN GRAPH
                    console.log("API accessed.");
                    console.log(idToken);
                    
                    console.table(resp.data)

                    self.referrals = resp.data;
                    // this.transactionId = data.transactionId;
                    // this.coupon = data.coupon;
                    // this.price = data.price;
                    // this.quantity = data.quantity;
                    // this.email = data.email;
                    // this.retailPrice = data.retailPrice;
                    // this.packageId = data.packageId;
                    // this.currency = data.currency;
                    // this.discount = data.discount;
                    // this.affiliateEarning = data.affiliateEarning;

                }).catch((error) => {
                    // Something is wrong
                    console.error(error)
                    alert("ITS ALL FUCKED")
                });
            })
        }
        else {
            console.log("No user signed in.")
        }
        }
    },

    beforeMount() {
        this.getReferrals();
    }
};
</script>