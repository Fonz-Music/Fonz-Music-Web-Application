<template>
    <section class='section'>
        <div class='section-inner'>
            <div class="container">
                <div class="row justify-content-center">
                    <div v-if="tableLoaded" class="table-responsive-md">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"> DATE </th>
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
                                    <td> {{ convertDate(referral.created) }} </td>
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

    props: [
        'referrals'
    ],

    data() {
        return {
            showDetails: false,
            currentReferral: {},
            tableLoaded: true
        }
    },
    
    methods: {
        openDetails() {
            this.showDetails = true;
        },

        convertDate(createdTime) {
            var date = new Date(createdTime._seconds * 1000);
            var year = date.getFullYear();
            var month = 1 + date.getMonth();
            var day = date.getDate();
            var formattedTime = day + '/' + month + '/' + year;
            return formattedTime;
        }
    },
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