<template>
  <div class="stripe-payment-tab center-content">
    <div class="payment-content center-content">
      <h3 class="">please enter your card details</h3>
    </div>
    <div class="stripe-form center-content">
      <stripe-elements
        ref="elementsRef"
        :pk="publishableKey"
        :amount="amount"
        locale="en"
        @token="tokenCreated"
        @loading="loading = $event"
      >
      </stripe-elements>
    </div>
    <b-button @click="submit">purchase</b-button>
  </div>
</template>

<script>
import { StripeElements } from "vue-stripe-checkout";
const axios = require("axios");
import { loadStripe } from "@stripe/stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// stripe = await loadStripe(
//   "pk_test_51HCTMlKULAGg50zbqiZBDhXIYS79K3eHv4atQn6LNjskaB3Q288Hm0JUYcT1ZN6MtFOoWp5IGCHkWtVZneQnGU0j00iR6NFvqU"
// );
export default {
  components: {
    StripeElements,
  },
  data: () => ({
    loading: false,

    amount: 1000,
    publishableKey:
      "pk_test_51HCTMlKULAGg50zbqiZBDhXIYS79K3eHv4atQn6LNjskaB3Q288Hm0JUYcT1ZN6MtFOoWp5IGCHkWtVZneQnGU0j00iR6NFvqU",
    token: null,
    charge: null,
    items: {
      packageId: localStorage.getItem("package"),
    },
    cartId: localStorage.getItem("cartId")
  }),
  methods: {
    submit() {
      this.$refs.elementsRef.submit();
    },
    tokenCreated(token) {
      this.token = token;
      // for additional charge objects go to https://stripe.com/docs/api/charges/object
      this.charge = {
        source: token.id,
        cartId: this.cartId,
        description: this.description // optional description that will show up on stripe when looking at payments
      };
      this.sendTokenToServer(this.charge);
    },
    sendTokenToServer(charge) {
      // console.log("stripe: " + stripe);
      axios
        .post("/i/checkout/payment-intent", { ...charge })
        .then(resp => {
          console.log("beginning on confirming");

          console.log("success order");
          // this.token = resp.data.clientSecret;
          //resp.data has a ton of info
          // PAYMENT SUCCESS
          // this.$router.to('/')
          this.$router.push({ path: "/ordersuccess" });
        })
        .catch(error => {
          console.log("fail order");

          this.confirmCardPayment(error.client_secret);
          console.log("error: " + error);
          // PAYMENT FAILED
          // route to failure page
          this.$router.push({ path: "/orderfailure" });
        });
    },
    confirmCardPayment(clientSecret) {
      // var stripe = Stripe(this.publishableKey);
      const card = this.$refs.elementsRef.card;
      if (clientSecret && stripe && card) {
        stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card: card
            }
          })
          .then(r => {
            console.log(r);
            if (r.error) {
              // Show error to your customer (e.g., insufficient funds)
              console.log(result.error.message);
            } else {
              if (r.paymentIntent.status === "succeeded") {
                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
              }
            }
          });
      }
    },
    async mounted() {
      this.stripe = await loadStripe("pk_test_Xg7qi3wvJZJYGcNRrVPF9aOc");
      this.createIntent();
    },
    createIntent() {
      // charge should just be the cartId
      // need to define charge
      axios
        .post("/i/payment-intent", { ...this.cartId })
        .then(resp => {
          console.log("beginning i");
          // this.token = resp.data.clientSecret;
          //resp.data has a ton of info
          // PAYMENT SUCCESS
          // this.$router.to('/')
          // this.$router.push({ path: "/ordersuccess" });
        })
        .catch(error => {
          console.log("error on mount: " + error);
          // PAYMENT FAILED
          // route to failure page
          // this.$router.push({ path: "/orderfailure" });
        });
    }
  },
  mounted: {}
};
</script>
<style media="screen">
.stripe-payment-tab {
  /* padding-top: 250px !important; */
  margin: auto;
}
.stripe-form {
  max-width: 600px;
  margin: 0 auto;
}

.btn-secondary {
  background-color: #b288b9;
  border-radius: 15px !important;
}
</style>
