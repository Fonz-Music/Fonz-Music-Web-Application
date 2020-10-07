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
        <h3 class="text-right">$60</h3>
        <!-- <button class="btn btn-sm btn-outline-primary">
          fonz
        </button> -->
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-center btn-outline-primary pack-separate">
        I want my coasters packaged SEPARATELY
      </button>
    </div>
    <br />
    <div class="form-group row">
      <label for="inputPromo" class="col-4 col-form-label"
        >Got a promo code?</label
      >
      <div class="col-8">
        <input
          type="promo"
          class="form-control input-sm"
          id="inputPromo"
          placeholder="Promo"
        />
      </div>
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
          <tr>
            <th scope="row">Discount</th>
            <td>$5</td>
          </tr>
          <th scope="row">Total</th>
          <td>$24</td>
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
    <p class="text-center">or checkout with Credit Card</p>
  </div>
</template>

<script>
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CCheckoutCoasters",
  components: {
    CImage
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
  font-size: 12px;
}
.form-group {
  font-size: 16px;
}
table {
  color: white;
}
</style>
