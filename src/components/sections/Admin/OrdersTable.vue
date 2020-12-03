<template>
  <fragment>
    <span @click="paginate">
      <b-pagination
        v-model="page"
        :total-rows="rows"
        :per-page="limit"
        aria-controls="my-table"
      ></b-pagination>
    </span>
    <span>
      <p>Total unfulfilled orders {{ rows }} </p>
    </span>
    <div class="table-style">
      <b-table hover :items="items"> </b-table>
    </div>
  </fragment>
</template>

<script>
const db = firebase.firestore();

export default {
  name: "COrdersTable",

  data() {
    return {
      items: [],
      ordersUnchanged: [],
      offset: 0,
      limit: 10,
      page: 1,
      rows: 0,
      offsetId: 0,
      lastDoc: null
    };
  },

  methods: {
    async getTotalRows() {
      const ordersRef = db.collection("orders");
      await ordersRef.get().then((snap) => {
        this.rows = snap.size;
      });
    },
    paginate() {
      this.offset = (this.page - 1) * this.limit;
      this.getOrders(this.offset);
    },

    async getOrders(offset) {
      this.items = [];
      const ordersRef = db.collection("orders");
      this.lastDoc = this.ordersUnchanged[this.limit - 1] || 0;

      const orders = await ordersRef
        .orderBy('created')
        .startAfter(this.lastDoc)
        .limit(this.limit)
        .get();

      let i = 0;
      this.ordersUnchanged = [];
      orders.forEach((doc) => {
        this.ordersUnchanged.push(doc);
        const orderId = doc.id;
        const { created, fulfilled, stripe, cart, assignedTo } = doc.data();
        var buyerName = "TEST";
        var date = 0;
        var quantity = 0;
        var value = 0;
        var fufillment = false;
        var address = "";

        // Check Name
        if (stripe.billing_details.name != null) {
          buyerName = stripe.billing_details.name;
        } else if (stripe.shipping != null) {
          if (stripe.shipping.name != null) {
            buyerName = stripe.shipping.name;
          }
        }

        // Check Address
        // const { city, country, line1, line2, postal_code, state } = stripe.billing_details.address;
        // const address = line1 + " " + line2 + " " + city + " " + state + " " + country + " " + postal_code;

        if (stripe.billing_details.address.country != null) {
          const {
            city,
            country,
            line1,
            line2,
            postal_code,
            state,
          } = stripe.billing_details.address;
          address =
            country +
            " " +
            state +
            " " +
            postal_code +
            " " +
            city +
            " " +
            line1 +
            " " +
            line2;
        } else if (stripe.shipping != null) {
          if (stripe.shipping.address != null) {
            if (stripe.shipping.address.country != null) {
              address += stripe.shipping.address.country;
            }
            if (stripe.shipping.address.state != null) {
              address += stripe.shipping.address.state;
            }
            if (stripe.shipping.address.postal_code != null) {
              address += stripe.shipping.address.postal_code;
            }
            if (stripe.shipping.address.city != null) {
              address += stripe.shipping.address.city;
            }
            if (stripe.shipping.address.line1 != null) {
              address += stripe.shipping.address.line1;
            }
            if (stripe.shipping.address.line2 != null) {
              address += stripe.shipping.address.line2;
            }
          }
        }

        // Check Date
        if (created != null) {
          const timeCreated = created.toDate();
          date =
            timeCreated.getDate() +
            "/" +
            timeCreated.getMonth() +
            "/" +
            timeCreated.getFullYear();
        }

        // Check Cart
        if (cart != null) {
          quantity = cart.quantity;
          value = "$" + cart.price;
        }

        // Check Fulfillment
        if (fulfilled != null) {
          fufillment = fulfilled;
        }

        this.items.push({
          orderId,
          date,
          buyerName,
          quantity,
          value,
          address,
          fufillment,
        });

        // const { fulfilled, assignedTo, cart, stripe } = doc.data();
        // const { quantity: coasterQuantity } = cart;

        // const name = stripe.billing_details.name;
        // const address = line1 + " " + line2 + " " + city + " " + state + " " + country + " " + postal_code;

        // console.log({ address })

        // // view more button, opens modal with more information
        // // doc/stripe/billing_details/address/name

        // this.items.push({name, address});
      });
    },
  },
  // watch: {
  //   page: () => {
  //     console.log("Page changed");
  //     this.offset = (this.page - 1) * this.limit;
  //     // this.paginate()
  //   },
  // },

  mounted() {
    this.getTotalRows();
    this.getOrders(0);
  },
};
</script>


<style>
.table-style {
  font-size: 5px;
  padding: 5px 20px 5px 20px;
}
</style>