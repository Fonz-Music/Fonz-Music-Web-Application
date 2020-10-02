<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      fade
      variant="info"
      @dismiss-count-down="countDownChanged"
      class="recentBuyer"
    >
      <b-avatar
        variant="warning"
        src="/img/splashcoaster.c258c766.png"
        class="mr-3"
      ></b-avatar>
      <span class="mr-auto"
        >Someone from {{ state }}, {{ country }} purchased
        {{ quantity }} coasters!
      </span>
      <b-badge>{{ time }}</b-badge>
    </b-alert>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  name: "RecentOrders",
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      timeout: 5000,
      state: "",
      country: "",
      quantity: "",
      time: "",
      pendingTimeout: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getOrder() {
      return axios.get("/i/orders/recent").then((resp) => {
        const data = resp.data;
        this.state = data.state;
        this.country = data.country;
        this.quantity = data.quantity;
        this.time = data.time;
      });
    },
    showRecentOrder() {
      setInterval(() => {
        if (Math.random(0, 1) > 0.5 && this.dismissCountDown == 0) {
          console.log("New order", this.dismissCountDown)
          this.getOrder().then(() => {
            console.log("Get timtout new");
            this.dismissCountDown = 5;
            // this.timeout += 3000;
            // this.showRecentOrder();
          });
        }
      }, 5000);
    },
  },
  created() {
    this.showRecentOrder();
  },
};
</script>
<style scoped>
.recentBuyer {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  color: #f9faff;
  background-color: #efa251;
  border-color: #efa251;
}
/* CSS for Desktop users so the recentBuyer box doesn't cross the whole screen */
@media only screen and (min-width: 768px) {
  .recentBuyer {
    width: 30%;
  }
}

.buyerGroup {
  background-color: none;
  border: none;
}
</style>