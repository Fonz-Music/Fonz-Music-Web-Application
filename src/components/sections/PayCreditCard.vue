<template>
  <section class="">
    <div class="progress-tabs ">
      <b-tabs v-model="tabIndex" align="center" pills justified>
        <b-tab>
          <email v-model="form.email" @nextTab="updateTab($event)" />
        </b-tab>
        <b-tab>
          <customerName
            v-model="form.customerName"
            @nextTab="updateTab($event)"
          />
        </b-tab>
        <b-tab>
          <addressTab
            v-model="form.placeAddress"
            @nextTab="proceedToCheckout()"
          />
        </b-tab>

        <!-- <b-tab>
          <paymentTwo />
        </b-tab> -->
      </b-tabs>
    </div>
  </section>
</template>

<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";

import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";

import email from "@/components/sections/checkoutForms/email.vue";
import customerName from "@/components/sections/checkoutForms/customerName.vue";
import addressTab from "@/components/sections/checkoutForms/address.vue";
// import payment from "@/components/sections/checkoutForms/payment.vue";
import paymentTwo from "@/components/sections/checkoutForms/paymentTakeTwo.vue";
// import stripePaymentVue from "@/components/sections/checkoutForms/stripePaymentVue.vue";

export default {
  name: "CPayCreditCard",
  components: {
    // CSectionHeader,

    addressTab,
    email,
    customerName,
    // payment,
    paymentTwo
    // stripePaymentVue
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      form: {
        email: null,
        placeAddress: null,
        customerName: {
          firstName: null,
          lastName: null
        }
      },
      tabIndex: 0,
      sectionHeader: {
        title: "Checkout"
        // paragraph:
        //   "Fonz acts as a communication device, allowing multiple people to contribute to the same Spotiy session."
      }
    };
  },
  methods: {
    updateTab: function(newTab) {
      this.tabIndex = newTab;
    },
    proceedToCheckout: function() {
      console.log("email: " + this.form.email);
      console.log("addr: " + this.form.placeAddress);
      console.log(
        "name: " +
          this.form.customerName.firstName +
          this.form.customerName.lastName
      );
      var customerName =
        this.form.customerName.firstName +
        " " +
        this.form.customerName.lastName;
      console.log("customer name " + customerName);
      var tempAdr = JSON.parse(localStorage.getItem("guestAddressArray"));
      console.log("adress intent 3" + tempAdr[3]);
      var addressLength = tempAdr.length - 1;
      console.log("legnth minus 1 " + addressLength);
      if (
        this.form.email != null &&
        this.form.placeAddress != null &&
        this.form.customerName != null
      ) {
        localStorage.setItem("firstName", this.form.customerName.firstName);
        localStorage.setItem("lastName", this.form.customerName.lastName);
        localStorage.setItem("guestName", customerName);
        localStorage.setItem("guestEmail", this.form.email);
        localStorage.setItem("guestAddressArray", this.form.placeAddress);
        localStorage.setItem(
          "guestAddress",
          this.form.placeAddress[addressLength]
        );
        this.$router.push({ path: "/paymentpage" });
      }
    }
  }
};
</script>
<style media="screen">
.progress-tabs {
  padding: 30px;
}
.nav-pills .nav-link.active {
  background-color: #b288b9;
}

/* .active-tab-class {
  background-color: #b288b9;
  color: #b288b9;
} */
/* .tabs {
  background-color: #b288b9;
} */
</style>
