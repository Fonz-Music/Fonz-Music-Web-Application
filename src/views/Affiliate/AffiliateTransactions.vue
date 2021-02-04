<template>
    <fragment>
        <c-affiliate-table/>
    </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAffiliate.vue";
import CAffiliateTable from "@/components/sections/Affiliate/Transactions/AffiliateTable.vue";

export default {
  name: "AffiliateTransactions",
  components: {
      CAffiliateTable
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
