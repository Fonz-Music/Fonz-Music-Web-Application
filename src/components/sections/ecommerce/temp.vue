rrent <template>
  <div class="stripe-payment-tab center-content">
    <div class="payment-content center-content">
      <h3 class="">please enter your card details</h3>
    </div>
    <div class="stripe-form center-content">
      <form id="payment-form">
        <slot name="card-element">
          <div id="card-element"></div>
        </slot>
        <slot name="card-errors">
          <div id="card-errors" role="alert"></div>
        </slot>
        <!-- <p class="error" v-if="this.error">{{ this.errorMessage }}</p> -->
        <b-button ref="submitButtonRef" type="submit" class="purchaseButton">
          purchase
        </b-button>
      </form>
      <div class="accept-privacy-policy">
        <p>
          by pressing purchase, you agree to our
          <router-link
            :to="{ name: 'privacyPolicy' }"
            target="_blank"
            style="color:#b188b9"
            >privacy policy.</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { loadStripeSdk } from "./load-checkout";
const axios = require("axios");
export default {
  props: {
    pk:
      "pk_live_51HCTMlKULAGg50zbqXd9cf5sIUrKrRwHQFBLbTLv56947KWQheJX3nXTNl6H8WTPzm6mVKYlEaYvLg2SyjGKBNio00T4W00Hap",
    amount: 1000,
    stripeAccount: {
      type: String,
    },
    apiVersion: "v3",
    locale: {
      type: String,
      default: "auto",
    },
    styleObject: {
      type: Object,
    },
    clientSecret: "",
  },
  data() {
    return {
      loading: false,
      stripe: null,
      elements: null,
      card: null,
    };
  },
  computed: {
    style() {
      return {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        },
      };
    },
    form() {
      return document.getElementById("payment-form");
    },
  },
  methods: {
    submit() {
      this.$refs.submitButtonRef.click();
    },


    sendPaymentToStripe(card) {
      axios
        .post("/i/checkout/pay", {
          paymentIntent: this.clientSecret,
          paymentMethod: card,
        })
        .then((resp) => {
          console.log("success order");
          // this.token = resp.data.clientSecret;
          //resp.data has a ton of info
          // PAYMENT SUCCESS
          // this.$router.to('/')
          this.$router.push({ path: "/ordersuccess" });
        })
        .catch((error) => {
          console.log("fail order");

          // this.confirmCardPayment(error.client_secret);
          console.log("error: " + error);
          // PAYMENT FAILED
          // route to failure page
          this.$router.push({ path: "/orderfailure" });
        });
    },
    loadStripeSdk: (pk, version = "v3", callback) => {
      console.log("opening window");
      if (window.Stripe) {
        callback();
        return;
      }
      let e = document.createElement("script");
      e.src = `https://js.stripe.com/v3`;
      e.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(e);
      e.addEventListener("load", callback);
      console.log("finished loadSDK");
    },

    sendCartIdToServer() {
      var addressIntent = localStorage.getItem("guestAddress");
      var emailIntent = localStorage.getItem("guestEmail");
      var nameIntent = localStorage.getItem("guestName");

      console.log("guestAddress: " + addressIntent);
      var paymentIntentVar = localStorage.getItem("paymentIntent");
      var addressLength = addressIntent.length - 1;
      axios
        .put("/i/checkout/payment-intent", {
          paymentIntent: paymentIntentVar,
          cartId: localStorage.getItem("cartId"),
          shipping: {
            address: {
              line1: addressIntent,
            },
            name: nameIntent,
          },
          receipt_email: emailIntent,
        })
        .then((resp) => {
          console.log("beginning on payment intent");
          this.clientSecret = resp.data.client_secret;
        })
        .catch((error) => {
          console.log("fail making payment intent");
        });
    },
  },
  mounted() {
    this.loadStripeSdk(this.pk, "v3", () => {
      const options = {
        stripeAccount: this.stripeAccount,
        apiVersion: this.apiVersion,
        locale: this.locale,
      };
      this.stripe = window.Stripe(
        "pk_live_51HCTMlKULAGg50zbqXd9cf5sIUrKrRwHQFBLbTLv56947KWQheJX3nXTNl6H8WTPzm6mVKYlEaYvLg2SyjGKBNio00T4W00Hap",
        options
      );
      this.elements = this.stripe.elements();
      this.card = this.elements.create("card", {
        style: this.styleObject || this.style,
      });
      this.card.mount("#card-element");
      this.card.addEventListener("change", ({ error }) => {
        const displayError = document.getElementById("card-errors");
        if (error) {
          displayError.textContent = error.message;
          return;
        }
        displayError.textContent = "";
      });

      var totalPrice = localStorage.getItem("totalPrice");
      this.sendCartIdToServer();

      this.form.addEventListener("submit", async (event) => {
        try {
          this.$emit("loading", true);
          event.preventDefault();
          const data = {
            ...this.card,
          };

          var addressIntent = localStorage.getItem("guestAddress");
          var emailIntent = localStorage.getItem("guestEmail");
          var nameIntent = localStorage.getItem("guestName");
          if (this.amount) data.amount = this.amount;
          console.log("client sectret " + this.clientSecret);
          const { token, error } = await this.stripe
            .confirmCardPayment(this.clientSecret, {
              payment_method: {
                card: data,
              },
            })
            .then((resp) => {

              if (resp.error) {
                this.$emit("error", error);
                const errorElement = document.getElementById("card-errors");
                errorElement.textContent = resp.error.message;
              } else {
                this.$router.push({ path: "/ordersuccess" });
              }
            })
            .catch((error) => {
              const errorElement = document.getElementById("card-errors");
              errorElement.textContent = error.message;
              console.error(error);
              this.$emit("error 1", error);
              return;
            });
        } catch (error) {
          console.error(error);
          this.$emit("error", error);
        } finally {
          this.$emit("loading", false);
        }
      });
    });
  },
  beforeMount() {
    const packageId = localStorage.getItem("package");
    if (!packageId) this.$router.push("/buy");
  },
};
</script>

<style scoped>
.StripeElement {
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
.hide {
  visibility: hidden;
}
#payment-form {
  max-width: 900px;
}
.stripe-payment-tab {
  /* padding-top: 250px !important; */
  margin: auto;
}
.stripe-form {
  max-width: 600px;
  margin: 0 auto;
}
.purchaseButton {
  margin: 30px;
}

.btn-secondary {
  background-color: #b288b9;
  border-radius: 15px !important;
}
</style>
