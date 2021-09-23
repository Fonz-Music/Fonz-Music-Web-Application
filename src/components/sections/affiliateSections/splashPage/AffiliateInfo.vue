<template>
  <section class="section">
    <div class="section-inner">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row justify-content-center">
              <span style="font-weight:bold; font-size: 30px; color:grey;"> Fonz Affiliate </span>
            </div>
            <div class="row justify-content-center">
              <div class="col-8" id="paragraph-style">
                <span> Introducing the Fonz Affiliate Program: get paid to share the party. 
                By signing up as an affiliate, you will be granted a unique coupon code in 
                which you can earn a commission on every Fonz Coaster you refer. </span>
              </div>
            </div>
          </div>
          <div class="col-12 why-use-code">
            <div class="row justify-content-center">
              <span style="font-weight:bold; font-size: 30px; color:grey;"> {{determineCurrencySymbol}}5 Off Their Order  </span>
            </div>
            <div class="row justify-content-center">
              <div class="col-8" id="paragraph-style">
                <span> Why Use Your Code? When your friends, family, or others purchase a coaster with your promo code, they save {{determineCurrencySymbol}}5 on their order! Everyone wins. </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AffiliateInfo",
  computed: {
    determineCurrencySymbol() {
      if (this.currency == null) {
        console.log("grabbing currency");
      }
      console.log("this cur " + this.currency);
      if (this.currency == "usd") return "$";
      else if (this.currency == "gbp") return "£";
      else return "€";
    }
  },
}
</script>

<style scoped>
  #paragraph-style {
    text-align: center;
    padding-top: 10px;
    color: grey;
    font-size: 18px;
  }
  .why-use-code {
    padding-top: 50px
  }
</style>