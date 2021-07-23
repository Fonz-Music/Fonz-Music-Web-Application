<template>
  <section>
    <div class="section">
      <div class="container">
        <b-pagination
          v-model="page"
          :total-rows="rows"
          :per-page="limit"
          aria-controls="my-table"
        ></b-pagination>

        <b-row>
          <b-dropdown class="m-md-2" :text="assignedTo">
            <b-dropdown-item @click="(assignedTo = 'All'), getOrders()">
              All
            </b-dropdown-item>
            <b-dropdown-item @click="(assignedTo = 'Benji'), getOrders()">
              Benji
            </b-dropdown-item>
            <b-dropdown-item @click="(assignedTo = 'Dermo'), getOrders()">
              Dermo
            </b-dropdown-item>
            <b-dropdown-item @click="(assignedTo = 'Didi'), getOrders()">
              Didi
            </b-dropdown-item>
            <b-dropdown-item @click="(assignedTo = 'Jay'), getOrders()">
              Jay
            </b-dropdown-item>
          </b-dropdown>

          <b-form-checkbox
            id="checkbox-1"
            v-model="showFulfilled"
            @click.prevent="getOrders()"
            name="checkbox-1"
            value="true"
            unchecked-value="false"
          >
            Show fulfilled orders
          </b-form-checkbox>

          <b-col lg="6" class="my-1">
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              label-for="filterInput"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  v-model="filter"
                  type="search"
                  id="filterInput"
                  placeholder="Type to Search"
                ></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''"
                    >Clear</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>

        <span>
          <p># Orders {{ rows }}</p>
        </span>

        <div class="table-style">
          <b-table
            hover
            :items="items"
            :fields="fields"
            :per-page="limit"
            :current-page="page"
            :filter="filter"
          >
            <template #cell(order_fufillment)="data">
              <b-button
                @click="
                  updateFufillment(
                    data.item.order_index,
                    data.item.order_id,
                    data.item.order_fufillment
                  )
                "
              >
                {{ data.item.order_fufillment }}
              </b-button>
            </template>

            <template #cell(order_assigned_to)="data">
              <b-dropdown :text="data.item.order_assigned_to" class="m-md-2">
                <b-dropdown-item
                  @click="
                    updateAssignee(
                      data.item.order_index,
                      data.item.order_id,
                      'Benji'
                    )
                  "
                >
                  Benji
                </b-dropdown-item>
                <b-dropdown-item
                  @click="
                    updateAssignee(
                      data.item.order_index,
                      data.item.order_id,
                      'Dermo'
                    )
                  "
                >
                  Dermo
                </b-dropdown-item>
                <b-dropdown-item
                  @click="
                    updateAssignee(
                      data.item.order_index,
                      data.item.order_id,
                      'Didi'
                    )
                  "
                >
                  Didi
                </b-dropdown-item>
                <b-dropdown-item
                  @click="
                    updateAssignee(data.item.order_index, data.item.order_id, 'Jay')
                  "
                >
                  Jay
                </b-dropdown-item>
              </b-dropdown>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { toNamespacedPath } from "path";
const db = firebase.firestore();

export default {
  name: "COrdersTable2",
  watch: {
    showFulfilled: function () {
      this.isFulfilled = this.showFulfilled === "true";
      this.getOrders();
    },
  },

  data() {
    return {
      fields: [
        {
          key: "order_id",
          sortable: true,
        },
        {
          key: "order_name",
          sortable: true,
        },
        {
          key: "order_quantity",
          sortable: true,
        },
        {
          key: "order_value",
          sortable: true,
        },
        {
          key: "order_address",
        },
        {
          key: "order_created",
          sortable: true,
        },
        {
          key: "order_fufillment",
          sortable: true,
        },
        {
          key: "order_assigned_to",
          sortable: true,
        },
      ],

      items: [],
      ordersUnchanged: [],
      offset: 0,
      limit: 10,
      page: 1,
      rows: 0,
      offsetId: 0,
      lastDoc: null,
      orders: [],
      assignedTo: "All",
      showFulfilled: "false",
      isFulfilled: this.showFulfilled === "true",
      filter: null,
    };
  },

  methods: {
    async getTotalRows() {

    },

    async getOrders() {
      console.log("getting orders");
      console.log({
        showFulfilled: this.showFulfilled,
        isFulfilled: this.isFulfilled,
      });
      this.items = [];
      let ordersRef = db.collection("orders");
      this.lastDoc = this.ordersUnchanged[this.limit - 1] || 0;

      if (this.assignedTo !== "All") {
        console.log("Load assigned t o ", this.assignedTo);
        ordersRef = ordersRef.where("assignedTo", "==", this.assignedTo);
      }

      console.log(ordersRef);
      ordersRef = ordersRef.orderBy("created");
      // if(this.showFulfilled === "true" || this.showFulfilled == false) {
      if (!this.isFulfilled) {
        console.log("showing unfulfille");
        ordersRef = ordersRef.where("fulfilled", "==", false);
      }

      const orders = await ordersRef.get();

      this.rows = orders.size;

      let i = 0;
      this.ordersUnchanged = [];
      let index = 0;
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
          order_index: index++,
          order_id: orderId,
          order_name: buyerName,
          order_date: date,
          order_created: date,
          order_quantity: quantity,
          order_value: value,
          order_address: address,
          order_fufillment: fufillment,
          order_assigned_to: assignedTo,
        });
      });
    },

    async updateFufillment(index, orderId, currentFulfillment) {
      currentFulfillment = !currentFulfillment;

      db.collection("orders")
        .doc(orderId)
        .update({ fulfilled: currentFulfillment })
        .then(() => {
          this.items[index].order_fufillment = currentFulfillment;
        });

      console.log(currentFulfillment);
    },

    async updateAssignee(index, orderId, assignee) {
      console.log({ index });
      db.collection("orders")
        .doc(orderId)
        .update({ assignedTo: assignee })
        .then(() => {
          console.log("updating assignedto to ", assignee);
          this.items[index].order_assigned_to = assignee;
          // this.getOrders(0);
        });
    },
  },

  mounted() {
    this.getTotalRows();
    this.getOrders();
  },
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