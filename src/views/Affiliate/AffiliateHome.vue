<template>
  <section class="section">
    <div section-inner>
      <p> {{name}} </p>
      <p> {{email}} </p>
      <p> {{userId}} </p>
    </div>
  </section>
</template>


<script>
// layout
import CLayout from "@/layouts/LayoutAffiliate.vue";

// components
import CDashboardBar from "@/components/sections/Affiliate/DashboardBar.vue";
import CLineChartContainer from "@/components/sections/Affiliate/LineChartContainer.vue";
import CReferralsInfo from "@/components/sections/Affiliate/ReferralsInfo.vue"

export default {
  name: "AffiliateHome",
  components: {
    CDashboardBar,
    CLineChartContainer,
    CReferralsInfo
  },

  data() {
    return {
      userId: '',
      name: '',
      email: '',
      user: {}
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
};



// Firebase Listener


</script>
