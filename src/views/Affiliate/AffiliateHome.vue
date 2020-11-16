<template>
  <fragment>
      <c-dashboard-bar/> 
      <div class="container">
        <div class="row">
          <div class="col-8 chart-style">
            <c-line-chart-container/> 
          </div>
          <div class="col text-style">
            <c-referrals-info/>
          </div>
        </div>  
      </div>                            
  </fragment>
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

  beforeMount() {
    this.eventPageViewAbout();
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>

<style>

  .chart-style {
    background-color: rgb(255, 255, 255) !important;
    border: 1px solid rgb(206, 206, 206) !important;
    border-radius: 20px;
    margin-right: 10px;
    margin-left: 10px;
    padding-top: 30px;
    padding-bottom: 20px;
}
  .text-style {
    background-color: rgb(255, 255, 255) !important;
    border: 1px solid rgb(206, 206, 206) !important;
    border-radius: 20px;
    margin-right: 10px;
    margin-left: 10px;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .dashboard-padding {
    padding-bottom: -5px;
  }

</style>