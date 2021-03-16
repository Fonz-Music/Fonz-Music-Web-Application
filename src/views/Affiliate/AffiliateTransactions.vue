<template>
    <fragment>
        <c-affiliate-table v-bind:referrals="this.referrals"/>
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
      referrals: []
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
          }).catch((error) => {
            console.error(error)
          });
          })
        }
    }  
  }
};
</script>
