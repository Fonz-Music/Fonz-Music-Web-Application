<template>
    <section class="section">
        <div class='container'>
            <div class='row title-style'>
                <c-section-header :data="sectionHeader"/>
            </div>
            <div class='row'>
                <div class='col container-style'>
                    <c-orders-table/>
                </div>
            </div>
      </div>  
    </section>
</template>



<script>
// import layout
import CLayout from "@/layouts/LayoutAdmin.vue";

// import components
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import COrdersTable from '@/components/sections/Admin/OrdersTable.vue';

export default {
  name: "AdminOrders",
  components: {
    CSectionHeader,
    COrdersTable
  },

  data() {
    return {
      sectionHeader: {
        title: 'Hello',
        paragraph: 'para'
      },
    }
  },

  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>



<style>
  .container-style {
    background-color: rgb(255, 255, 255) !important;
    border: 1px solid rgb(206, 206, 206) !important;
    border-radius: 20px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .title-style {
      margin-top: 50px;
  }
</style>