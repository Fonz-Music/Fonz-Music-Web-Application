<template>
  <fragment>
    <c-dashboard-bar/>
    <c-affiliate-graph v-if="referralsLoaded" v-bind:referrals="this.referrals"/>
  </fragment>
</template>


<script>
const axios = require("axios");
import CLayout from "@/layouts/LayoutAffiliate.vue";
import CDashboardBar from "@/components/sections/Affiliate/Dashboard/DashboardBar.vue";
import CAffiliateGraph from "@/components/sections/Affiliate/Dashboard/AffiliateGraph.vue"

export default {
  name: "AffiliateDashboard",
  components: {
    CDashboardBar,
    CAffiliateGraph
  },

  data() {
    return {
      referrals: [],
      referralsLoaded: false
    }
  },

  created() {
    this.$emit("update:layout", CLayout);
    this.getReferrals();
  },

  beforeMount() {
  },

  methods: {
    async getReferrals() {
      let self = this
        if(firebase.auth().currentUser) {
          firebase.auth().currentUser.getIdToken().then(function(idToken) {
            axios.get('https://fonzmusic.com/i/affiliate/referrals', {
            headers: {
              Authorization: `Bearer ${ idToken }`
            }
          }).then((resp) => {
            self.referrals = resp.data;
            self.referralsLoaded = true;
          }).catch((error) => {
            console.error(error)
          });
          })
        }
    }  
  }
};


</script>
