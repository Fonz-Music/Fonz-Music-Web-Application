<template>
  <fragment>
    <c-dashboard-bar/>
    <c-affiliate-graph/>
  </fragment>
</template>


<script>
// layout
import CLayout from "@/layouts/LayoutAffiliate.vue";

// components
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
      userId: '',
      name: '',
      email: '',
      token: '',
      user: {},
      idToken: ''
    }
  },

  created() {
    this.$emit("update:layout", CLayout);

    this.user = firebase.auth().currentUser;

    if(this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.userId = this.user.uid;
    }



  },

  methods: {

  }
};


</script>
