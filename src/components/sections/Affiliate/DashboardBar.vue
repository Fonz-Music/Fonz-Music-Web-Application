<template>
  <section
    class="section dashboard-bar center-content"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >

   <!-- Dashboard Bar Container -->
  <div class="container" id="dashboardBarSection">  
      <h2 class="text-left mt-20 mb-15">Hi, Ben!</h2>



    <!-- Tiles -->

    <div
      class="tiles-wrap"
      :class="[pushLeft && 'push-left']"
    >
      <div class="row">
  
        <!-- Tile One -->
        <div class="col reduce-padding">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row element-border">
                <div class="col text">
                  <p> Image </p>
                </div>

                <div class="col text">
                  <div class="row">
                    <p> Total Income </p>
                    <p>€1,025.43</p>
                  </div>
                  <!-- <div class="row">
                    <p>€1,025.43</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tile One -->
        <div class="col reduce-padding">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row element-border">
                <div class="col text">
                  <p> Image </p>
                </div>

                <div class="col text">
                  <div class="row">
                    <p> Total Income </p>
                    <p>€1,025.43</p>
                  </div>
                  <!-- <div class="row">
                    <p>€1,025.43</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tile One -->
        <div class="col reduce-padding">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row element-border">
                <div class="col text">
                  <p> Image </p>
                </div>

                <div class="col text">
                  <div class="row">
                    <p> Total Income </p>
                    <p>€1,025.43</p>
                  </div>
                  <!-- <div class="row">
                    <p>€1,025.43</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Tile One -->
        <div class="col reduce-padding">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row element-border">
                <div class="col text">
                  <p> Image </p>
                </div>

                <div class="col text">
                  <div class="row ">
                    <p> Total Income </p>
                    <p>€1,025.43</p>
                  </div>
                  <!-- <div class="row">
                    <p>€1,025.43</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Tile One -->
        <div class="col reduce-padding">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row element-border">
                <div class="col text">
                  <p> Image </p>
                </div>

                <div class="col text">
                  <div class="row">
                    <p> Total Income </p>
                    <p>€1,025.43</p>
                  </div>
                  <!-- <div class="row">
                    <p>€1,025.43</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



<!-- 
    <div class="container dashboard-bar">
      <div class="row">

        <div class="reveal-from-right col-sm" data-reveal-delay="400">

          <div class="tiles-item-inner">
            <div class="col-sm text">
              <p> image </p>
            </div>
            <div class="col-sm text">
              <p> total income </p>
            </div>
          </div>
        </div>

        <div class="reveal-from-right col-sm" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <p>total withdrawn</p>
          </div>
        </div>

        <div class="reveal-from-right col-sm" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <p>available withdrawals</p>
          </div>
        </div>

        <div class="reveal-from-right col-sm" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <div class="text">
              <p>pending withdrawals</p>
            </div>
          </div>
        </div>

        <div class="reveal-from-right col-sm" data-reveal-delay="400">
          <div class="tiles-item-inner">
            <p>total clicks</p>
          </div>
        </div>
      </div>
    </div> -->

  </section>
</template>

<script>
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";

import { FingerprintSpinner } from "epic-spinners";
const axios = require("axios");

export default {
  name: "CDashboardBar",
  components: {
    CSectionHeader,
    CButton,
    CImage,
    FingerprintSpinner
  }
}
</script>


<style media="screen">

.dashboard-bar .tiles-wrap .reduce-padding {
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.dashboard-bar {
  margin-bottom: -24px;
}

.dashboard-bar .tiles-item-inner {
  border: 2px #bebebe !important;
}

.dashboard-bar .tiles-item-inner .text {
  font-size:14px !important;
  text-align: left !important;
}

.dashboard-bar .tiles-item-inner .col .reduce-padding{
  padding-top: 0px;
  padding-right: 0px;
}

.dashboard-bar .tiles-item-inner .image {
  text-align: left !important;
}

.element-border {
  border: 1px solid rgb(206, 206, 206) !important;
  border-radius: 20px;
  padding-right: 3px;
}

</style>