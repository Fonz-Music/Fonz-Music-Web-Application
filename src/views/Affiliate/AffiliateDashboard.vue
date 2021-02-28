<template>
  <fragment>
    
    <c-registration-modal/>

    <!-- <div class="section-inner">
      <c-dashboard-bar v-if="referralsLoaded" v-bind:referrals="this.referrals"/>
      <c-affiliate-graph v-if="referralsLoaded" v-bind:referrals="this.referrals"/>
      <div class="container" v-if="!referralsLoaded">
        <div class="row">
          <h3> Loading... </h3>
        </div>
      </div>
    </div> -->
  </fragment>
</template>


<script>
const axios = require("axios");
import CLayout from "@/layouts/LayoutAffiliate.vue";
import CDashboardBar from "@/components/sections/Affiliate/Dashboard/DashboardBar.vue";
import CAffiliateGraph from "@/components/sections/Affiliate/Dashboard/AffiliateGraph.vue";
import CAffiliateBanner from "@/components/sections/Affiliate/Dashboard/AffiliateBanner.vue";
import CRegistrationModal from '@/components/sections/Affiliate/Dashboard/RegistrationModal.vue';

export default {
  name: "AffiliateDashboard",
  components: {
    CDashboardBar,
    CAffiliateGraph,
    CAffiliateBanner,
    CRegistrationModal
  },

  data() {
    return {
      referrals: [],
      referralsLoaded: false,
      couponRegistered: false
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
};


</script>
