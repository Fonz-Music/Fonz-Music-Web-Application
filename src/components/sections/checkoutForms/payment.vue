<!-- <template lang="html">
  <div class="paymentTab">
    <section>
      <div class="payment-content center-content">
        <h3 class="">please enter your card details</h3>
      </div>
      <br />
      <div class="stripe-payment center-content">
        <form id="payment-form">
          <div id="card-element"></div>

          <button id="submit">
            <div class="spinner hidden" id="spinner"></div>

            <span id="button-text">Pay</span>
          </button>

          <p id="card-error" role="alert"></p>

          <p class="result-message hidden">
            Payment succeeded, see the result in your

            <a href="" target="_blank">Stripe dashboard.</a> Refresh the page to
            pay again.
          </p>
        </form>
      </div> 
      <div id="app">
        <card
          class="stripe-card"
          :class="{ complete }"
          stripe="pk_test_51HCTMlKULAGg50zbqiZBDhXIYS79K3eHv4atQn6LNjskaB3Q288Hm0JUYcT1ZN6MtFOoWp5IGCHkWtVZneQnGU0j00iR6NFvqU"
          :options="stripeOptions"
          @change="complete = $event.complete"
        />
        <button class="pay-with-stripe" @click="pay" :disabled="!complete">
          Pay with credit card
        </button>
      </div>
    </section>

    
  </div>
</template>

<script>
import VueCardFormat from "vue-credit-card-validation";
import CInput from "@/components/elements/Input.vue";

import { Card, createToken } from "vue-stripe-elements-plus";
const axios = require("axios");
import { loadStripe } from "@stripe/stripe-js";
// import CButton from "@/components/elements/Button.vue";
export default {
  name: "payment",
  data: () => ({
    loading: false,
    complete: false,
    stripe: null,
    amount: 1000,
    publishableKey:
      "pk_test_51HCTMlKULAGg50zbqiZBDhXIYS79K3eHv4atQn6LNjskaB3Q288Hm0JUYcT1ZN6MtFOoWp5IGCHkWtVZneQnGU0j00iR6NFvqU",
    token: null,
    charge: null,
    items: {
      packageId: localStorage.getItem("package")
    },
    cartId: localStorage.getItem("cartId")
  }),
  components: {
    CInput,
    VueCardFormat,
    Card
    // CButton
  },
  methods: {
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => {
        this.tokenCreated(data.token);

        this.sendTokenToServer(this.charge);
      });
    },
    async mounted() {
      this.stripe = await loadStripe("pk_test_Xg7qi3wvJZJYGcNRrVPF9aOc");
      var elements = this.stripe.elements();
      // this.createIntent();
    },
    tokenCreated(token) {
      this.token = token;

      // for additional charge objects go to https://stripe.com/docs/api/charges/object
      this.charge = {
        source: token.id,
        cartId: this.cartId,
        description: this.description // optional description that will show up on stripe when looking at payments
      };
      // this.sendTokenToServer(this.charge);
    },
    sendTokenToServer(charge) {
      this.stripe = Stripe(
        "pk_test_51HCTMlKULAGg50zbqiZBDhXIYS79K3eHv4atQn6LNjskaB3Q288Hm0JUYcT1ZN6MtFOoWp5IGCHkWtVZneQnGU0j00iR6NFvqU"
      );
      // console.log("stripe: " + stripe);
      axios
        .post("/i/checkout/payment-intent", { ...charge })
        .then(function(result) {
          return result.json();
        })
        .then(function(data) {
          var style = {
            base: {
              color: "#32325d",
              fontFamily: "Arial, sans-serif",
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                color: "#32325d"
              }
            },
            invalid: {
              fontFamily: "Arial, sans-serif",
              color: "#fa755a",
              iconColor: "#fa755a"
            }
          };
          var card = elements.create("card", { style: style });
          // Stripe injects an iframe into the DOM
          card.mount("#card-element");
          card.on("change", function(event) {
            // Disable the Pay button if there are no card details in the Element
            document.querySelector("button").disabled = event.empty;
            document.querySelector("#card-error").textContent = event.error
              ? event.error.message
              : "";
          });
          var form = document.getElementById("payment-form");
          form.addEventListener("submit", function(event) {
            event.preventDefault();
            // Complete payment when the submit button is clicked
            this.payWithCard(this.stripe, card, data.clientSecret);
          });
        });
    },
    payWithCard: function(stripe, card, clientSecret) {
      this.loading(true);
      stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: card
          }
        })
        .then(function(result) {
          if (result.error) {
            // Show error to your customer
            this.showError(result.error.message);
          } else {
            // The payment succeeded!
            console.log("PAYMENT COMPLETED ");
            this.orderComplete(result.paymentIntent.id);
          }
        });
    },
    orderComplete: function(paymentIntentId) {
      this.loading(false);

      document

        .querySelector(".result-message a")

        .setAttribute(
          "href",

          "https://dashboard.stripe.com/test/payments/" + paymentIntentId
        );

      document.querySelector(".result-message").classList.remove("hidden");

      document.querySelector("button").disabled = true;
    },
    showError: function(errorMsgText) {
      this.loading(false);

      var errorMsg = document.querySelector("#card-error");

      errorMsg.textContent = errorMsgText;

      setTimeout(function() {
        errorMsg.textContent = "";
      }, 4000);
    }
  }
};

// The items the customer wants to buy

// Disable the button until we have Stripe set up on the page

// document.querySelector("button").disabled = true;

// Calls stripe.confirmCardPayment

// If the card requires authentication Stripe shows a pop-up modal to

// prompt the user to enter authentication details without leaving your page.

/* ------- UI helpers ------- */

// Shows a success message when the payment is complete

// Show the customer the error from Stripe if their card fails to charge

// Show a spinner on payment submission

// var loading = function(isLoading) {
//   if (isLoading) {
//     // Disable the button and show a spinner
//
//     document.querySelector("button").disabled = true;
//
//     document.querySelector("#spinner").classList.remove("hidden");
//
//     document.querySelector("#button-text").classList.add("hidden");
//   } else {
//     document.querySelector("button").disabled = false;
//
//     document.querySelector("#spinner").classList.add("hidden");
//
//     document.querySelector("#button-text").classList.remove("hidden");
//   }
// };
</script>

<style lang="css" scoped>
/* c-button {
  width: 90px;
} */
.paymentTab {
  max-width: 500px;
  /* padding: auto; */
  margin: auto;
}
.btn-secondary {
  background-color: #b288b9;
}
.paymentTab p {
  text-align: center;
}
</style>

<style scoped>
/* Variables */

* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;

  font-size: 16px;

  -webkit-font-smoothing: antialiased;

  display: flex;

  justify-content: center;

  align-content: center;

  height: 100vh;

  width: 100vw;
}

form {
  width: 100%;

  min-width: 300px;
  max-width: 600px;

  align-self: center;

  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);

  border-radius: 7px;

  padding: 20px;
}

input {
  border-radius: 6px;

  margin-bottom: 6px;

  padding: 12px;

  border: 1px solid rgba(50, 50, 93, 0.1);

  height: 44px;

  font-size: 16px;

  width: 100%;

  background: white;
}

.result-message {
  line-height: 22px;

  font-size: 16px;
}

.result-message a {
  color: rgb(89, 111, 214);

  font-weight: 600;

  text-decoration: none;
}

.hidden {
  display: none;
}

#card-error {
  color: rgb(105, 115, 134);

  text-align: left;

  font-size: 13px;

  line-height: 17px;

  margin-top: 12px;
}

#card-element {
  border-radius: 4px 4px 0 0;

  padding: 12px;

  border: 1px solid rgba(50, 50, 93, 0.1);

  height: 44px;

  width: 100%;

  background: white;
}

#payment-request-button {
  margin-bottom: 32px;
}

/* Buttons and links */

button {
  background: #5469d4;

  color: #ffffff;

  font-family: Arial, sans-serif;

  border-radius: 0 0 4px 4px;

  border: 0;

  padding: 12px 16px;

  font-size: 16px;

  font-weight: 600;

  cursor: pointer;

  display: block;

  transition: all 0.2s ease;

  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);

  width: 100%;
}

button:hover {
  filter: contrast(115%);
}

button:disabled {
  opacity: 0.5;

  cursor: default;
}

/* spinner/processing state, errors */

.spinner,
.spinner:before,
.spinner:after {
  border-radius: 50%;
}

.spinner {
  color: #ffffff;

  font-size: 22px;

  text-indent: -99999px;

  margin: 0px auto;

  position: relative;

  width: 20px;

  height: 20px;

  box-shadow: inset 0 0 0 2px;

  -webkit-transform: translateZ(0);

  -ms-transform: translateZ(0);

  transform: translateZ(0);
}

.spinner:before,
.spinner:after {
  position: absolute;

  content: "";
}

.spinner:before {
  width: 10.4px;

  height: 20.4px;

  background: #5469d4;

  border-radius: 20.4px 0 0 20.4px;

  top: -0.2px;

  left: -0.2px;

  -webkit-transform-origin: 10.4px 10.2px;

  transform-origin: 10.4px 10.2px;

  -webkit-animation: loading 2s infinite ease 1.5s;

  animation: loading 2s infinite ease 1.5s;
}

.spinner:after {
  width: 10.4px;

  height: 10.2px;

  background: #5469d4;

  border-radius: 0 10.2px 10.2px 0;

  top: -0.1px;

  left: 10.2px;

  -webkit-transform-origin: 0px 10.2px;

  transform-origin: 0px 10.2px;

  -webkit-animation: loading 2s infinite ease;

  animation: loading 2s infinite ease;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);

    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);

    transform: rotate(360deg);
  }
}

@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);

    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);

    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  form {
    width: 85vw;
  }
}
</style> -->
