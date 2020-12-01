<template>
  <section class="table-style">

    <!-- Date | Name | Address-->

    <b-table hover :items="items"></b-table>

    <p> {{ randOrderId }} </p>
  </section>
</template>

<script>
const db = firebase.firestore();

export default {
  name: "COrdersTable",
  data() {
    return {
      items: [],
      randOrderId: 1234
    };
  },
  methods: {
    async getOrders() {
      const ordersRef = db.collection("orders");
      const orders = await ordersRef
        .where("fulfilled", "==", false)
        .limit(30)
        .get();

      orders.forEach((doc) => {

        // const orderId = doc.id

        const orderId = doc.id;
        const { fulfilled, assignedTo, cart, stripe } = doc.data();
        const { quantity: coasterQuantity } = cart;

        const name = stripe.billing_details.name;
        const { city, country, line1, line2, postal_code, state } = stripe.billing_details.address;
        const address = line1 + " " + line2 + " " + city + " " + state + " " + country + " " + postal_code;

        console.log({ address })

        // view more button, opens modal with more information
        // doc/stripe/billing_details/address/name

        this.items.push({address});
      });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>


<style>
.table-style {
  font-size: 5px;
}
</style>