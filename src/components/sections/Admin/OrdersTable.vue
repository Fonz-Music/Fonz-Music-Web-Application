<template>
  <section class="table-style">
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
    };
  },

  methods: {
    async getOrders() {

      // assign reference to database collection 'orders'
      const ordersRef = db.collection("orders");
      
      // create object orders from ordersRef
      const orders = await ordersRef 
        // .where("assignedTo", "==", "Dukes")
        .limit(100)
        .get();

      // for each 'doc' in orders
      orders.forEach((doc) => {
        const {created, fulfilled, stripe, cart, assignedTo} = doc.data();
        var buyerName = 'TEST';
        var date = 0;
        var quantity = 0;
        var value = 0;
        var fufillment = false;
        var address = "";

        // Check Name
        if(stripe.billing_details.name != null) {
          buyerName = stripe.billing_details.name;
        }
        else if(stripe.shipping != null) {
          if(stripe.shipping.name != null) {
            buyerName = stripe.shipping.name;
          }
        }

        // Check Address
        if(stripe.billing_details.address.country != null) {
          const appleAddress = stripe.billing_details.address
          address = appleAddress.country + " " + appleAddress.state + " " + appleAddress.postal_code + " " + appleAddress.city + " " + appleAddress.line1 + " " + appleAddress.line2;
        }
        else if(stripe.shipping != null) {
          if(stripe.shipping.address != null) {
            if(stripe.shipping.address.country != null) {
              address += stripe.shipping.address.country;
            }
            if(stripe.shipping.address.state != null) {
              address += stripe.shipping.address.state;
            }
            if(stripe.shipping.address.postal_code != null) {
              address += stripe.shipping.address.postal_code;
            }
            if(stripe.shipping.address.city != null) {
              address += stripe.shipping.address.city;
            }
            if(stripe.shipping.address.line1 != null) {
              address += stripe.shipping.address.line1;
            }
            if(stripe.shipping.address.line2 != null) {
              address += stripe.shipping.address.line2;
            }
          }
        }
        
        // Check Date
        if(created != null) {
          const timeCreated = created.toDate();
          date = timeCreated.getDate() + "/" + timeCreated.getMonth() + '/' + timeCreated.getFullYear();
        }

        // Check Cart
        if(cart != null) {
          quantity = cart.quantity;
          value = '$' + cart.price;
        }

        // Check Fulfillment
        if(fulfilled != null) {
          fufillment = fulfilled;
        }


        console.log(doc.id, buyerName);


        this.items.push({date, buyerName, quantity, value, fufillment, address});





        // this.items.push({buyerName});


        // console.log(formattedTime);

        // this.items.push({fulfilled, buyerName});

        // const { fulfilled, assignedTo, cart, stripe } = doc.data();
        // const { quantity: coasterQuantity } = cart;

        // const name = stripe.billing_details.name;
        // const { city, country, line1, line2, postal_code, state } = stripe.billing_details.address;
        // const address = line1 + " " + line2 + " " + city + " " + state + " " + country + " " + postal_code;

        // console.log({ address })

        // // view more button, opens modal with more information
        // // doc/stripe/billing_details/address/name
        
        // this.items.push({name, address});
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