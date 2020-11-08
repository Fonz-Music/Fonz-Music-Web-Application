<template lang="html">
  <div class="nameTab">
    <h3 class="text-center">what&apos;s your name?</h3>
    <p>Enter It Below</p>

    <div class="nameSubmit">
      <c-input
        type="text"
        placeholder="fistname lastname"
        class="inputname"
        v-model="value"
      >
        <div class="text-center">
          <b-button-group class="mt-2">
            <br />
            <b-button @click="nextTab">Submit</b-button>
          </b-button-group>
        </div>

        <!-- <a class="btn btn-link" role="button" href="/paywithcreditcard">
        Submit
      </a> -->
      </c-input>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import CInput from "@/components/elements/Input.vue";
// import CButton from "@/components/elements/Button.vue";
export default {
  name: "customerName",
  data() {
    return {
      customerName: ""
    };
  },
  // props: {
  //   tabNumber: {
  //     type: Integer
  //   }
  // },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    }
  },
  components: {
    CInput
    // CButton
  },
  methods: {
    nextTab: function() {
      // this checks if its a valid email

      localStorage.setItem("guestName", this.value);
      var localEmail = localStorage.getItem("guestName");
      console.log("name from storage " + localEmail);
      // this.$emit("input", this.value);
      this.$emit("nextTab", 2);
      // this.$emit("nextTab", 1);
    },
    emailIsValid: function(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    addEmailToCart(emailAddress) {
      const cartIdFromUser = localStorage.getItem("cartId");

      // communicate with API to add promo code to cart
      // PUT /i/cart/{cartId}/{emailAddress}
      var response;
      axios
        .put(`${this.$API_URL}/i/cart/${cartIdFromUser}/${emailAddress}`)
        .then(resp => {
          response = resp.data;
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style lang="css" scoped>
/* c-button {
  width: 90px;
} */
.btn-secondary {
  background-color: #b288b9;
}
.nameTab {
  max-width: 500px;
  /* padding: auto; */
  margin: auto;
}

.nameTab p {
  text-align: center;
}
.submitButton {
  background-color: #ff9425;
  color: white;
}
.noPromo button {
  background-color: #b288b9;
  color: white;
}
.button-block {
  margin: 35px 0;
}
.form-input {
  border-radius: 25px !important;
}
b-button {
  background-color: orange;
}
</style>
