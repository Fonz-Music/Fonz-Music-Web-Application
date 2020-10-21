<template>
  <section>
    <div class="progress-tabs ">
      <!-- <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div> -->
      <b-tabs v-model="tabIndex" align="center" pills justified>
        <b-tab>
          <email v-model="form.email" @nextTab="updateTab($event)" />
        </b-tab>
        <b-tab>
          <!-- <template v-slot:title>
            address
          </template> -->
          <addressTab
            v-model="form.placeAddress"
            @nextTab="updateTab($event)"
          />
        </b-tab>
        <b-tab>
          <!-- <template v-slot:title>
            payment
          </template> -->
          <payment />
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";

import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";

import email from "@/components/sections/checkoutForms/email.vue";
import addressTab from "@/components/sections/checkoutForms/address.vue";
import payment from "@/components/sections/checkoutForms/payment.vue";

export default {
  name: "CPayCreditCard",
  components: {
    // CSectionHeader,

    addressTab,
    email,
    payment
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      form: {
        email: "",
        placeAddress: ""
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
