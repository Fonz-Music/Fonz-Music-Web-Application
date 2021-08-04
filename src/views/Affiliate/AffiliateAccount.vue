<template>
  <fragment>
    <div class="section-inner">
      <c-account-dashboard/>
    </div>
  </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutAffiliate.vue";
import CAccountDashboard from "@/components/sections/affiliate/account/AccountDashboard.vue";

export default {
  name: "AffiliateAccount",
  components: {
    CAccountDashboard
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
