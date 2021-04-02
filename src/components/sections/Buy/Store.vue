<template>
  <section class="section" style="background-color: #F7F7F7">
    <div class="section-inner">

    <div class="container">
      
      <div class="row">

        <div class="col-md-6 col-sm-12">
          <img src="@/assets/images/Icons/coasterMockupPng.png"/>
        </div>

        <div class="col-md-6 col-sm-12">

          <div class="row-12">
            <span style="font-weight: 700; color: black; font-size: 32px;"> fonz coaster </span>
          </div>

          <div class="row-12">
            <span style="font-weight: 300; color: grey; font-size: 20px;"> €21.95 </span>
          </div>

          <div class="row price-selector-container">
            <div class="col-4">
              <button class="price-selector"> x1 - €21.95 / ea </button>
            </div>
            <div class="col-4">
              <button class="price-selector"> x2 - €20.45 / ea </button>
            </div>
            <div class="col-4">
              <button class="price-selector"> x3 - €19.55 / ea </button>
            </div>
          </div>

          <div class="row-12 buy-now-container">
            <c-button style="background-color: #FF9425; border-radius: 5px; color: white;"> buy now </c-button>
          </div>

          <div class="row-12 d-flex" style="border-top: solid 1px lightgrey;">
            <div class="selector-item">
              <button class="selector-button"> benefits </button>
            </div>
            <div class="selector-item">
              <button class="selector-button"> delivery </button>
            </div>
          </div>

          <div class="row-12 selector-item-description-container">
            <span class="selector-item-description"> - €3 shipping (free shipping on orders over €22) </span> <br/>
            <span class="selector-item-description"> - 100% waterproof and lightweight </span> <br/>
            <span class="selector-item-description"> - allow your friends to queue songs whenever you're together </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import CButton from "@/components/elements/Button.vue";

export default {
  name:"Store",
  components: {
    CButton
  }
}

</script>

<style scoped>
.price-selector {
  font-size: 14px;
  border: solid 1px;
  background-color: white;
  border-color: lightgrey;
  width: 140px;
  height: 35px;
  border-radius: 5px;
}

.price-selector:hover {
  border-color: #FF9425;
  color: #FF9425;
}

.selector-item {
  color: grey;
  padding-right: 15px;
  padding-top: 2px;
  padding-left: 15px;
  font-size: 18px;
}

.selector-item-description-container {
  padding-left: 10px;
}

.selector-item-description {
  font-size: 16px;
}

.selector-item:hover {
  border-top: solid 1px #FF9425;
}

.selector-button:hover {
  color: black;
}


.buy-now-container {
  padding-top: 10px;
  padding-bottom: 25px;
}


.price-selector-container {
  padding-top: 10px;
  padding-bottom: 5px;
}
</style>
