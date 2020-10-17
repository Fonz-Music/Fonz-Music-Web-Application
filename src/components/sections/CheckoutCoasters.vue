<template lang="html">
  <div class="container checkout-page">
    <div class="topLogo">
      <router-link to="/">
        <c-image
          class="logoWordmark"
          :src="require('@/assets/images/fonzLogoWordmarkWhite.svg')"
          alt="Neon"
        />
      </router-link>
    </div>
    <h3 class="text-left">Order Summary</h3>
    <div class="row">
      <div class="col-3">
        <c-image
          class="coasterPackageImage"
          :src="getImgUrl(coasterPackages.single.thumbnail)"
          alt="coaster package"
        />
      </div>

      <div class="col-6 product-details">
        <h4 class="">{{ coasterPackages.single.title }}</h4>
        <p>{{ coasterPackages.single.information }}</p>
      </div>

      <div class="col-3 product-price">
        <div v-if="!promoValid">
          <h3 class="text-right">${{ currentPackage.price }}</h3>
        </div>
        <div v-else>
          <h3 class="text-right">
            <del>${{ coasterPackages.single.price }}</del>
          </h3>
          <h3 class="text-right">
            ${{
              calculateSubtotalPrice(currentPackage.price, promoValid)
            }}
          </h3>
        </div>

        <!-- <button class="btn btn-sm btn-outline-primary">
          fonz
        </button> -->
      </div>
    </div>
    <div class="text-center">
      <b-button class="btn btn-center btn-link pack-separate">
        I want my coasters packaged SEPARATELY
      </b-button>
    </div>
    <br />
    <p>Got a promo code from a friend?</p>

    <b-form inline class="form-group row" @submit.stop.prevent="addPromoCode" >
      <b-input
        type="promo"
        class="form-control input-sm col-8"
        id="inputPromo"
        placeholder="Promo"
      ></b-input>

      <b-button type="submit" class="btn btn-sm btn-link col-3">
        send it
      </b-button>
    </b-form>

    <div class="totalTable">
      <table class="table table-sm table-borderless">
        <tbody>
          <tr>
            <th scope="row">Subtotal</th>
            <td>
              ${{
                calculateSubtotalPrice(coasterPackages.single.price, promoValid)
              }}
            </td>
          </tr>
          <tr>
            <th scope="row">Government Theft (Tax)</th>
            <td>${{ governmentTheft }}</td>
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
          <td>
            ${{
              calculateTotalPrice(
                coasterPackages.single.price,
                governmentTheft,
                promoValid
              )
            }}
          </td>
        </tbody>
      </table>
    </div>
    <div class="paymentOptions text-center">
      <c-image
        class="applePay"
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
      <router-link class="btn btn-link" to="/paywithcreditcard/">or checkout with Credit Card</router-link>
    </div>
  </div>
</template>

<script>
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CCheckoutCoasters",
  components: {
    CImage,
  },
  data() {
    return {
      promoValid: false,
      packagePrice: 60,
      totalPrice: 60,
      governmentTheft: 2,
      currentPackage: {
        SKU: "11111111",
        price: 27,
        thumbnail: "singleCoasterPackage.png",
        title: "Fonz Coaster",
        information: "One coaster to connect to the Fonz App",
        packagedSeperately: false
      },
      coasterPackages: {
        single: {
          SKU: "11111111",
          price: 27,
          thumbnail: "singleCoasterPackage.png",
          title: "Fonz Coaster",
          information: "One coaster to connect to the Fonz App",
        },
        double: {
          SKU: "22222222",
          price: 47,
          thumbnail: "twoCoasterPackage.png",
          title: "Two Fonz Coasters",
          information: "Two Coasters Packaged Together",
        },
        triple: {
          SKU: "33333333",
          price: 60,
          thumbnail: "threeCoasterPackage.png",
          title: "Three Fonz Coasters",
          information: "Three Coasters Packaged Together",
        },
      },
      // currentPackage: coasterPackages.single
    };
  },
  methods: {
    addPromoCode() {
      // communicate with API to add promo code to cart
    },
    calculateTotalPrice(packagePrice, tax, promo) {
      if (promo) {
        var totalPrice = packagePrice - 5 + tax;
        return totalPrice;
      } else {
        var totalPrice = packagePrice + tax;
        return totalPrice;
      }
    },
    calculateSubtotalPrice(packagePrice, promo) {
      if (promo) return packagePrice - 5;
      else return packagePrice;
    },

    getImgUrl(pic) {
      return require("@/assets/images/" + pic);
    },
    onSubmit(evt) {
      console.log("pressed update promo");
      evt.preventDefault();
      this.promoValid = !promoValid;
    },
  },
  computed: {
    updatePromo() {
      console.log("pressed update promo");
      this.promoValid = !promoValid;
    },
  },
};
</script>

<style lang="css" scoped>
.checkout-page {
  max-width: 900px;
}
.logoWordmark {
  margin: 10px auto;
  width: 25%;
  max-width: 150px;
}
.checkout-page h2,
.checkout-page h3 {
  margin: 0px;
}
.coasterPackageImage {
  /* min-width: 50px;
  max-width: 500px; */
  /* width: 100%; */
}
.btn-secondary {
  color: #b288b9;
  background-color: transparent;
  border: 0;
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
#inputPromo {
  margin-left: 15px;
}
table {
  color: white;
}
.paymentOptions {
  margin: 0 auto;
  max-width: 300px;
  width: 75%;
}
</style>
