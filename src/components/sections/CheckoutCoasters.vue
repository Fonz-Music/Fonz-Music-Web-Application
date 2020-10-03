<template>
  <section>
    <div class="progress-tabs">
      <b-tabs align="center" pills justified>
        <b-tab active>
          <template v-slot:title>
            promo
          </template>
          <promo />
        </b-tab>

        <b-tab>
          <template v-slot:title>
            email
          </template>
          <email />
        </b-tab>
        <b-tab>
          <template v-slot:title>
            address
          </template>
          <address />
        </b-tab>
        <b-tab>
          <template v-slot:title>
            payment
          </template>
          <payment />
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";

import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import promo from "@/components/sections/checkoutForms/promo.vue";
import email from "@/components/sections/checkoutForms/email.vue";
import address from "@/components/sections/checkoutForms/address.vue";
import payment from "@/components/sections/checkoutForms/payment.vue";

export default {
  name: "CCheckoutCoaster",
  components: {
    CSectionHeader,
    promo,
    address,
    email,
    payment
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      sectionHeader: {
        title: "Checkout"
        // paragraph:
        //   "Fonz acts as a communication device, allowing multiple people to contribute to the same Spotiy session."
      }
    };
  }
};
</script>
<style media="screen">
.progress-tabs {
  padding: 50px;
}
/* .tabs {
  background-color: #b288b9;
} */
</style>
