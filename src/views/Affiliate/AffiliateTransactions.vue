<template>
    <fragment>
      <div class="section-inner">
        
      
        <div class="container" v-if="checkIfReferrals">
          <div class="container" v-if="!referralsLoaded">
            <div class="row">
              <h3> Loading... </h3>
            </div>
          </div>
          <c-affiliate-table v-bind:referrals="this.referrals"/>
        </div>
        <div class="container no-sales center-content" v-if="!checkIfReferrals">
          <div class="no-sales-text">
            <h3> you don't have any sales yet :/ </h3>
            <p> you'll see a table of your sales when you make your first sale </p>
          </div>
        </div>
      </div>
    </fragment>
</template>

<script>
const axios = require("axios");

import CLayout from "@/layouts/LayoutAffiliate.vue";
import CAffiliateTable from "@/components/sections/Affiliate/Transactions/AffiliateTable.vue";

export default {
  name: "AffiliateTransactions",
  components: {
      CAffiliateTable
  },

  data() {
    return {
      referrals: [],
      referralsLoaded: false 
    }
  },

  created() {
    this.$emit("update:layout", CLayout);
  },

  beforeMount() {
    this.getReferrals();
  },

  methods: {
    getReferrals() {
      let self = this
        if(firebase.auth().currentUser) {
          firebase.auth().currentUser.getIdToken().then(function(idToken) {
            axios.get('/i/affiliate/referrals', {
            headers: {
              Authorization: `Bearer ${ idToken }`
            }
          }).then((resp) => {
            self.referrals = resp.data;
            self.referrals = true
          }).catch((error) => {
            console.error(error)
          });
          })
        }
    }  
  },
  computed: {
    checkIfReferrals() {
      console.log("referrals " + self.referralsLoaded);
      if (self.referrals == null || self.referrals.length == 0 ) return false
      else return true
    }
  }
};
</script>

