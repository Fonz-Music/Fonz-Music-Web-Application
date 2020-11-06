<template lang="html">
  <div class="emailTab">
    <h3 class="text-center">what&apos;s your email?</h3>
    <p>Enter It Below</p>

    <div class="emailSubmit">
      <c-input
        type="email"
        placeholder="Email"
        class="inputEmail"
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
import CInput from "@/components/elements/Input.vue";
// import CButton from "@/components/elements/Button.vue";
export default {
  name: "email",
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
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
        localStorage.setItem("guestEmail", this.value);
        console.log("email from storage " + localStorage.getItem("guestEmail"));
        this.$emit("input", this.value);
        this.$emit("nextTab", 1);
        // this.$emit("nextTab", 1);
      }
    },
    emailIsValid: function(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
.emailTab {
  max-width: 500px;
  /* padding: auto; */
  margin: auto;
}

.emailTab p {
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
