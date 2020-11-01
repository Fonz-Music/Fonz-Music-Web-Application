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
export default {
  components: {
    StripeElements
  },
  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey:
      "pk_test_51HCTMlKULAGg50zbqiZBDhXIYS79K3eHv4atQn6LNjskaB3Q288Hm0JUYcT1ZN6MtFOoWp5IGCHkWtVZneQnGU0j00iR6NFvqU",
    token: null,
    charge: null,
    items: {
      packageId: localStorage.getItem("package")
    },
    cartId: localStorage.getItem('cartId')
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
      axios
        .post("/i/checkout/payment-intent", { ...charge })
        .then(resp => {
          console.log("success order");
          // this.token = resp.data.clientSecret;
          //resp.data has a ton of info
          // PAYMENT SUCCESS
          // this.$router.to('/')
          this.$router.push({ path: "/ordersuccess" });
        })
        .catch(error => {
          if (error.requiresAction) {
            // Use Stripe.js to handle required card action
            stripe.handleCardAction(error.clientSecret).then(function(result) {
              if (result.error) {
                // Show `result.error.message` in payment form
              } else {
                // The card action has been handled
                // The PaymentIntent can be confirmed again on the server
                fetch("/pay", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    payment_intent_id: result.paymentIntent.id
                  })
                })
                  .then(function(confirmResult) {
                    return confirmResult.json();
                  })
                  .then(handleServerResponse);
              }
            });
          }
          console.log("fail order");
          console.log("error: " + error);
          // PAYMENT FAILED
          // route to failure page
          this.$router.push({ path: "/orderfailure" });
        });
    }
  }
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
