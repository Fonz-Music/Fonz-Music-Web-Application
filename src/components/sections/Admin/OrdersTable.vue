<template>
  <section class='table-style'>
      <b-table hover :items="items"></b-table>
  </section>
</template>

<script>
  export default {
    name: 'COrdersTable',

    data() {
      return {
        items: [
          {
            order_no: 20, first_name: 'Johnathan', last_name: 'Dukes', value: '$25.00', fufilled: false
          },
          {
            order_no: 69, first_name: 'Benjamin', last_name: 'Vaughan', value: '$25.00', fufilled: false
          }
        ]
      }
    }
  }
</script>

<style>
  .table-style {
    font-size: 5px;
  }
</style>