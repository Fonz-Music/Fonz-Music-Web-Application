<template>
  <section class="section" style="background-color: #F7F7F7">
    <div class="section-inner">
    <div class="container">
      
      <div class="row" style="align-items: center;">

        <div class="col-md-5 col-sm-12">
          <img src="@/assets/images/Icons/coasterMockupPng.png"/>
        </div>

        <div class="col-md-7 col-sm-12">

          <div class="row-12">
            <span style="font-weight: 700; color: black; font-size: 34px;"> fonz coaster </span>
          </div>

          <div class="row" style="padding-top: 20px;">
            <div class="col-4" style="padding-right: 0px;">
              <div class="price-selector-active">
                <div>
                  <span style="color: black; font-size: 16px;"> Hangout Host </span>
                </div>
                <div>
                  <span style="color: grey; font-size: 14px;"> 1 Coaster </span>
                </div>
                <div>
                  <span style="color: #B288B9; font-size: 14px;"> €21.95 </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;"> 
                    For the host who loves hearing new tunes with friends and is ready to simplify that process and empower their guests to contribute to the vibe.
                  </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;">
                  - €3 Shipping (FREE Shipping on purchases of two or more) <br>
                  - 100% waterproof and lightweight <br>
                  - Allow your friends to queue songs whenever you're together
                  </span>
                </div>
              </div>
               <div class="select-button-active">
                  <img src="@/assets/images/selectedOrange.svg" style="width: 20px; display: block; margin: auto;"/>
                </div>
            </div>

            <div class="col-4" style="padding-right: 0px;">
              <div class="price-selector-inactive">
                <div>
                  <span style="color: black; font-size: 16px;"> Party Pleaser </span>
                </div>
                <div>
                  <span style="color: grey; font-size: 14px;"> 3 Coasters </span>
                </div>
                <div>
                  <span style="color: #B288B9; font-size: 14px;"> €54.95 </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;"> 
                    For the DJ who adores throwing parties, tailgates, and pre-games. No more leaving your laptop open, being interrupted, or giving your phone to a stranger.
                  </span>
                </div>
                
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;">
                    - FREE Shipping (Usually €9) <br>
                    - Have a coaster to keep for your roadtrips <br>
                    - No more shoulder-taps, interrupts, or requests at your shindigs
                  </span>
                </div>
              </div>
                <div class="select-button-inactive">
                  <img src="@/assets/images/selectGrey.svg" style="width: 20px; display: block; margin: auto;"/>
                </div>
            </div>

            <div class="col-4" style="padding-right: 0px;">
              <div class="price-selector-inactive">
                <div>
                  <span style="color: black; font-size: 16px;"> Rush and Rager </span>
                </div>
                <div>
                  <span style="color: grey; font-size: 14px;"> 5 Coasters </span>
                </div>
                <div>
                  <span style="color: #B288B9; font-size: 14px;"> €84.95 </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;"> 
                    For the frat house. For the sorority mixer. For throwing the party of the year. Have a coaster at the pool, at the pong table, at the dye table. Or, for giving out to five friends (who need your music taste).
                  </span>
                </div>
                <div style="padding-top: 5px;">
                  <span style="font-size: 12px;">
                  - FREE Shipping (Usually €15) <br>
                  - Now you can tell who should join the house by what they queue <br>
                  - Have a coaster in every room and every car of your convoy
                  </span>
                </div>
              </div>
               <div class="select-button-inactive">
                  <img src="@/assets/images/selectGrey.svg" style="width: 20px; display: block; margin: auto;"/>
                </div>
            </div>


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
.price-selector-inactive {
  border: .5px solid lightgrey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: white;
  padding: 15px 10px 5px 10px;
  font-size: 14px;
  min-height: 400px;
}

.price-selector-active {
  border: .5px solid #FF9425;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: white;
  padding: 15px 10px 5px 10px;
  font-size: 14px;
  min-height: 400px;
}


.select-button-active {
  background-color: #FF9425;
  bottom: 0% !important;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  padding: 5px;
  font-size: 14px;
  height: 30px;
}

.select-button-inactive {
  background-color: lightgrey;
  bottom: 0% !important;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  padding: 5px;
  font-size: 14px;
  height: 30px;
}

</style>
