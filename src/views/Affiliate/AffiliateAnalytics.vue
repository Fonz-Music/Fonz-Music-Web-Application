<template>
  <fragment>
      <c-dashboard-bar/> 
      <div class="container">
        <div class="row">
          <div class="col-8 container-style">
          </div>
          <div class="col container-style">
            <c-referrals-info/>
          </div>
        </div>  
      </div>                            
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAffiliate.vue";
// import section header
// import sections
import CDashboardBar from "@/components/sections/Affiliate/DashboardBar.vue";
import CReferralsInfo from "@/components/sections/Affiliate/ReferralsInfo.vue"
// import some required elements

export default {
  name: "AffiliateAnalytics",
  components: {
    CDashboardBar,
    CReferralsInfo
  },
  
  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
