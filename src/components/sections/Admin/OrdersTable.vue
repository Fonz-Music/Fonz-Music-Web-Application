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

      <b-table hover :items="items" :fields="fields"> 
        
        <template #cell(order_fufillment)="data">
          <b-button @click='updateFufillment(data.item.order_id, data.item.order_fufillment)' >
            {{ data.item.order_fufillment }}
          </b-button>
        </template>

        <template #cell(order_assigned_to)="data">
          <b-dropdown :text="data.item.order_assigned_to" class="m-md-2">
            <b-dropdown-item @click='updateAssignee(data.item.order_id, "Benji")'> Benji </b-dropdown-item>
            <b-dropdown-item @click='updateAssignee(data.item.order_id, "Dermo")'> Dermo </b-dropdown-item>
            <b-dropdown-item @click='updateAssignee(data.item.order_id, "Didi")'> Didi </b-dropdown-item>
            <b-dropdown-item @click='updateAssignee(data.item.order_id, "Jay")'> Jay </b-dropdown-item>
          </b-dropdown>
        </template>

      </b-table>

    </div>

  </fragment>
</template>

<script>
import { toNamespacedPath } from 'path';
const db = firebase.firestore();

export default {
  name: "COrdersTable2",

  data() {
    return {
      fields: [
        {
          key: 'order_id'
        },
        {
          key: 'order_name'
        },
        {
          key: 'order_quantity'
        },
        {
          key: 'order_value'
        },
        {
          key: 'order_address'
        },
        {
          key: 'order_fufillment'
        },
        {
          key: 'order_assigned_to'
        }
      ],

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
          order_id: orderId,
          order_name: buyerName,
          order_date: date,
          order_quantity: quantity,
          order_value: value,
          order_address: address,
          order_fufillment: fufillment,
          order_assigned_to: assignedTo
        })
      });
    },

    async updateFufillment(orderId, currentFulfillment) {
      currentFulfillment = !currentFulfillment;

      db.collection("orders").doc(orderId).update({ fulfilled : currentFulfillment}).then(()=>{
        this.getOrders(0);
      })

      console.log(currentFulfillment)
    },

    async updateAssignee(orderId, assignee) {
      db.collection("orders").doc(orderId).update({ assignedTo : assignee}).then(() => {
        this.getOrders(0);
      })
    }
  },

  mounted() {
    this.getTotalRows();
    this.getOrders(0);
  }

};

</script>


<style>
.table-style {
  font-size: 5px;
  padding: 5px 20px 5px 20px;
}

.idbackg {
  background-color: grey;
  margin: auto;
}
</style>