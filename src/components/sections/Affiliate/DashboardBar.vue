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
    <div
      class="pricing-inner section-inner"
      :class="[
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      ]"
    >
      <h2 class="text-left mt-0 mb-0">Hi, Ben!</h2>
    </div>


    <!-- Tiles -->

    <div
      class="tiles-wrap"
      :class="[pushLeft && 'push-left']"
    >
      <div class="row">

        <!-- Tile One -->
        <div class="col">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row">
                <div class="col">
                  <h6> Tile1 </h6>
                </div>
                <div class="col">
                  <h6> Tile1 </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tile One -->
        <div class="col">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row">
                <div class="col">
                  <h6> Tile2 </h6>
                </div>
                <div class="col">
                  <h6> Tile2 </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tile Three -->
        <div class="col">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row">
                <div class="col">
                  <h6> Tile3 </h6>
                </div>
                <div class="col">
                  <h6> Tile3 </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tile Four -->
        <div class="col">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row">
                <div class="col">
                  <h6> Tile4 </h6>
                </div>
                <div class="col">
                  <h6> Tile4 </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tile Five -->
        <div class="col">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="row">
                <div class="col">
                  <h6> Tile5 </h6>
                </div>
                <div class="col">
                  <h6> Tile5 </h6>
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
.dashboard-bar .tiles-item-inner {
  background: #f0f0f0 !important;
}

.dashboard-bar .tiles-item-inner .text {
  font-size:18px;
}

.tiles-item-inner {
  border-radius: 25px;
  padding-top: 10px !important;
}

</style>