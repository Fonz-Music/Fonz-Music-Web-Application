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
      type: String
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
      localStorage.setItem("guestName", this.value);
      var localName = localStorage.getItem("guestName");
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
.form-input {
  border-radius: 25px !important;
}
b-button {
  background-color: orange;
}
</style>
