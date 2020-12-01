<template lang="html">
  <div class="nameTab">
    <h3 class="text-center">what&apos;s your name?</h3>
    <p>Enter It Below</p>

    <div class="nameSubmit">
      <c-input
        type="text"
        placeholder="firstname"
        class="inputname"
        v-model="value.firstName"
      >
      </c-input>
      <div class="last-name-form">
        <c-input
          type="text"
          placeholder="lastname"
          class="inputname"
          v-model="value.lastName"
        >
        </c-input>
      </div>

      <div class="text-center">
        <b-button-group class="mt-2">
          <br />
          <b-button @click="nextTab">Submit</b-button>
        </b-button-group>
      </div>

      <!-- <a class="btn btn-link" role="button" href="/paywithcreditcard">
        Submit
      </a> -->
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
      firstName: {
        type: String
      },
      lastName: {
        type: String
      }
      // required: true
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
      localStorage.setItem("firstName", this.value.firstName);
      localStorage.setItem("lastName", this.value.lastName);
      var localName = localStorage.getItem("firstName");
      console.log("name from storage " + localName);
      // this.$emit("input", this.value);
      this.$emit("nextTab", 2);
      // this.$emit("nextTab", 1);
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
.inputname {
  padding: 50px;
}
.last-name-form {
  padding: 20px 0;
}
.form-input {
  border-radius: 25px !important;
}
b-button {
  background-color: orange;
}
</style>
