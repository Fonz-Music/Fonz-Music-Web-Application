<template>
  <fragment>
    <div class="section-inner">
      
      <div class="container" v-if="checkIfReferrals">
        <div class="container" v-if="!referralsLoaded">
          <div class="row">
            <h3> Loading... </h3>
          </div>
        </div>
        <c-dashboard-bar v-if="referralsLoaded" v-bind:referrals="this.referrals"/>
        <c-affiliate-graph v-if="referralsLoaded" v-bind:referrals="this.referrals"/>
      </div>
      <div class="container no-sales center-content" v-if="!checkIfReferrals">
        <div class="no-sales-text">
          <h3> you don't have any sales yet :/ </h3>
          <p> you'll see a graph of your sales when you make your first sale </p>
        </div>
      </div>

      <!-- <c-dashboard-bar v-if="referralsLoaded" v-bind:referrals="this.referrals"/>
      <c-affiliate-graph v-if="referralsLoaded" v-bind:referrals="this.referrals"/> -->

      

    </div>
  </fragment>
</template>


<script>
const axios = require("axios");
import CLayout from "@/layouts/LayoutAffiliate.vue";
import CDashboardBar from "@/components/sections/affiliateSections/dashboardPage/DashboardBar.vue";
import CAffiliateGraph from "@/components/sections/affiliateSections/dashboardPage/AffiliateGraph.vue";

export default {
  name: "AffiliateDashboard",
  components: {
    CDashboardBar,
    CAffiliateGraph,
  },

  data() {
    return {
      referrals: [],
      referralsLoaded: false,
    }
  },

  created() {
    this.$emit("update:layout", CLayout);
  },

  beforeMount() {
    this.getReferrals();
  },

  methods: {
    async getReferrals() {
      let self = this
        if(firebase.auth().currentUser) {
          firebase.auth().currentUser.getIdToken().then(function(idToken) {
            axios.get('/i/affiliate/referrals', {
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
    },
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
<style media="screen">
/* .affiliate-page-content {
  min-height: 700px
} */
  .no-sales .no-sales-text{
    margin: 250px auto 100px auto;
  }
</style>
