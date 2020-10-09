<template lang="html">
  <div class="container checkout-page">
    <h2 class="text-center">fonz</h2>

    <h3 class="text-left">Order Summary</h3>
    <div class="row">
      <div class="col-3">
        <c-image
          class=""
          :src="require('@/assets/images/team-member-02.png')"
          alt="coaster package"
        />
      </div>

      <div class="col-6 product-details">
        <h4 class="">3 Fonz Coasters</h4>
        <p>Three Coasters Packaged Together</p>
      </div>

      <div class="col-3 product-price">
        <div v-if="!promoValid">
          <h3 class="text-right">${{ packagePrice }}</h3>
        </div>
        <div v-else>
          <h3 class="text-right">
            <del>${{ packagePrice }}</del>
          </h3>
          <h3 class="text-right">${{ packagePrice - 5 }}</h3>
        </div>

        <!-- <button class="btn btn-sm btn-outline-primary">
          fonz
        </button> -->
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-center btn-link pack-separate">
        I want my coasters packaged SEPARATELY
      </button>
    </div>
    <br />
    <p>Got a promo code from a friend?</p>
    <div class="form-group row">
      <div class="col-9">
        <input
          type="promo"
          class="form-control input-sm"
          id="inputPromo"
          placeholder="Promo"
        />
      </div>
      <button
        type="submit"
        class="btn btn-sm btn-link col-3"
        @click="updatePromo"
      >
        send it
      </button>
    </div>
    <div class="totalTable">
      <table class="table table-sm table-borderless">
        <tbody>
          <tr>
            <th scope="row">Subtotal</th>
            <td>$27</td>
          </tr>
          <tr>
            <th scope="row">Government Theft (Tax)</th>
            <td>$2</td>
          </tr>
          <tr>
            <th scope="row">Shipping</th>
            <td>FREE</td>
          </tr>
          <tr v-if="promoValid">
            <th scope="row">Discount</th>
            <td>$5</td>
          </tr>
          <th scope="row">Total</th>
          <td>${{ totalPrice }}</td>
        </tbody>
      </table>
    </div>
    <div class="paymentOptions">
      <c-image
        class=""
        :src="require('@/assets/images/buyWithApple.png')"
        alt="coaster package"
      />
      <br />
      <c-image
        class=""
        :src="require('@/assets/images/buyWithGoogle.png')"
        alt="coaster package"
      />
    </div>
    <br />
    <div class="text-center">
      <a class="btn btn-link" role="button" href="/paywithcreditcard">
        or checkout with Credit Card
      </a>
    </div>
  </div>
</template>

<script>
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CCheckoutCoasters",
  components: {
    CImage
  },
  data() {
    return {
      promoValid: false,
      packagePrice: 60,
      totalPrice: 60
    };
  },
  methods: {
    setTotalPrice: function() {
      this.totalPrice = packagePrice - 5;
    },
    updatePromo: function() {
      this.promoValid = !promoValid;
    }
  }
};
</script>

<style lang="css" scoped>
.checkout-page h2,
.checkout-page h3 {
  margin: 0px;
}
.product-details p {
  font-size: 10pt;
}
.product-details h4 {
  font-size: 12pt;
  margin: 0px 0px 0px 0px;
}
.product-price h3 {
  margin: 0px 0px 0px 0px;
}
.pack-separate {
  font-size: 16px;
}
.form-group {
  font-size: 16px;
}
table {
  color: white;
}
</style>
