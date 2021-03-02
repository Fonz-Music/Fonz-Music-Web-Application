<template>
  <section id="modal-background">
    <div id="modal-content">
      <div class="container">


        <!-- Registration Title -->
        <div class="row">
          <div class="registration-title">
            <div class="registration-title-text">
              <span style="font-size: 24px; font-weight: bold; color: grey;"> Welcome to Fonz Affiliate </span>
            </div>
            <div id="registration-title-text">
              <span style="font-size: 16px;"> 
                Thank you for registering, we look forward to working with you!
                Just a few things left before we're ready to go...
              </span>
            </div>
          </div>
        </div>


        <!-- Display Name -->
        <div class="row">
          <div class="registration-section">
            <div class="registration-section-header">
              <span style="font-size: 16px; font-weight: bold; color: grey;"> Name </span>
            </div>
            <div class="registration-section-body">
              <span style="font-size: 14px;"> 
                What's your name? We'll use this purely for your user experience and if we need to contact you.
                This will not be distrubted to any third parties.
              </span>
            </div>
            <div class="registration-section-body">
              <input 
              id="firstName"
              class="registration-section-input"
              type="text"
              placeholder="First Name"
              required
              />
            </div>
            <div class="registration-section-body">
              <input 
              id="surname"
              class="registration-section-input"
              type="text"
              placeholder="Surname"
              required
              />
            </div>
          </div>
        </div>


        <!-- Coupon Code -->
        <div class="row">
          <div class="registration-section">
            <div class="registration-section-header">
              <span style="font-size: 16px; font-weight: bold; color: grey;"> Coupon Code </span>
            </div>
            <div class="registration-section-body">
              <span style="font-size: 14px;"> 
                What would you like your coupon code to be?
                Note that this can't be changed, so choose wisely!
                Make it short, and somewhat related to your name.
              </span>
            </div>
            <div class="registration-section-body">
              <input 
              id="couponCode"
              class="registration-section-input"
              type="text"
              placeholder="Coupon Code"
              required
              />
            </div>
          </div>
        </div>


        <!-- Referral Source -->
        <div class="row">
          <div class="registration-section">
            <div class="registration-section-header">
              <span style="font-size: 16px; font-weight: bold; color: grey;"> Referral Source </span>
            </div>
            <div class="registration-section-body">
              <span style="font-size: 14px;"> 
                How did you find out about the Fonz Affiliate Program?
              </span>
            </div>
            <div class="registration-section-body">
              <select class="registration-section-source" id="source">
                <option value="none"> Select </option>
                <option value="wordofmouth"> Word of Mouth </option>
                <option value="instagram"> Instagram </option>
                <option value="facebook"> Facebook </option>
                <option value="tiktok"> TikTok </option>
              </select>
            </div>
          </div>
        </div>


        <!-- Social Media -->
        <div class="row">
          <div class="registration-section">

            <div class="registration-section-header">
              <span style="font-size: 16px; font-weight: bold; color: grey;"> Social Media </span>
            </div>


            <div class="registration-section-body">
              <span style="font-size: 14px;"> 
                What type of social media do you plan on using, and what's your following?
              </span>
            </div>


            <div class="registration-section-body">
              <div class="social-media-inputs">

                <div class="social-media-inputs-one">
                  <input
                    class="social-media-input-checkbox"
                    id="instagram-checkbox"
                    type="checkbox"
                  />
                  <span style="font-size: 14px;"> Instagram </span>
                </div>

                <div class="social-media-inputs-two">
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="usefonz"
                    id="instagram-handle"
                    type="text"
                    />
                  </div>
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="201"
                    id="instagram-following"
                    type="text"
                    />
                  </div>
                </div>

              </div>


              <div class="social-media-inputs">

                <div class="social-media-inputs-one">
                  <input
                    class="social-media-input-checkbox"
                    id="tiktok-checkbox"
                    type="checkbox"
                  />
                  <span style="font-size: 14px;"> TikTok </span>
                </div>

                <div class="social-media-inputs-two">
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="usefonz"
                    id="tiktok-handle"
                    type="text"
                    />
                  </div>
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="201"
                    id="tiktok-following"
                    type="text"
                    />
                  </div>
                </div>

              </div>


              <div class="social-media-inputs">

                <div class="social-media-inputs-one">
                  <input
                    class="social-media-input-checkbox"
                    id="twitter-checkbox"
                    type="checkbox"
                  />
                  <span style="font-size: 14px;"> Twitter </span>
                </div>

                <div class="social-media-inputs-two">
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="usefonz"
                    id="twitter-handle"
                    type="text"
                    />
                  </div>
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="201"
                    id="twitter-following"
                    type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="registration-section-body">
              <div class="align-button">
                <c-button @click="registerUser()" class="button-sm registration-button"> Sign Up </c-button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");
import CButton from "@/components/elements/Button.vue";

export default {
    name: 'LoginModal',
    components: {
      CButton
    },

    data() {
      return {
        couponError: true,
        payload: {}
      }
    },

    created() {
      console.log(firebase.auth().currentUser.uid);
    },

    methods: {
      async registerUser() {
        let self = this;
        this.createCoupon().then(function() {
          self.registerAffiliate();
          self.$emit("accountRegisteredEvent", true);
        }).catch((error) => {
          console.log("sumthin wrong");
          console.log(error);
        })
      },

      async registerAffiliate() {
        var payload = {
          displayName: document.getElementById("firstName").value + " " + document.getElementById("surname").value,
          following: 0,
          platforms: {
            instagram: {
              handle: document.getElementById("instagram-handle").value,
              following: document.getElementById("instagram-following").value
            },

            tiktok: {
              handle: document.getElementById("tiktok-handle").value,
              following: document.getElementById("tiktok-following").value
            },

            twitter: {
              handle: document.getElementById("twitter-handle").value,
              following: document.getElementById("twitter-following").value
            }
          },
          source: document.getElementById("source").value,
        }

        firebase.auth().currentUser.getIdToken().then(function(idToken) {
          axios.post("https://fonzmusic.com/i/affiliate/profile", payload, {
            headers: {
              Authorization: `Bearer ${ idToken }`
            }
          })
          .then(function(resp) {
            console.log("Account created successfully");
            console.log("event emitted");
            console.log(resp);})
            .catch((error) => {
            console.log(error);
          })
        })
      },

      async createCoupon() {
        var coupon = document.getElementById("couponCode").value;
        firebase.auth().currentUser.getIdToken().then(function(idToken) {
          var path = "https://fonzmusic.com/i/affiliate/coupon"
          axios.post(path, { coupon },
            {
              headers: {
                Authorization: `Bearer ${ idToken }`
              }
            }
          ).then(function(resp) {
            console.log(resp);
            console.log("coupon created successfuly")
          }).catch(function(error) {
            console.log(error);
          })
        })
      }
    }
}

        // async registerAffiliate() {
        //   if(firebase.auth().currentUser) {
        //     firebase.auth().currentUser.getIdToken().then(function(idToken) {
        //       axios.post("/i/affiliate/profile", null, {
        //         headers: {
        //           Authorization: `Bearer ${ idToken }`
        //         }
        //       })
        //       .catch(function(error) {
        //         console.log(error);
        //       })
        //     })
        //   }
        // },

    // async checkCoupon() {
    //   let self = this;
    //   firebase.auth().currentUser.getIdToken().then(function(idToken) {
    //     axios.get("/i/affiliate/coupon", {
    //       headers: {
    //         Authorization: `Bearer ${ idToken }`
    //       }
    //     })
    //     .then(function(resp) {
    //         self.couponRegistered = true;
    //     })
    //     .catch({})
    //   })
    // },

</script>


<style scoped>
/* General Modal */
  #modal-background {
    position: fixed; 
    z-index: 999; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4) !important; 
    overflow-y: scroll;
  }

  #modal-content {
    background-color: #fefefe;
    border-radius: 3px;
    margin: 2% auto; 
    padding: 30px;
    border: 1px solid #888;
    width: 50%;
  }

/* Surface Section Styling */
  .registration-title {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .registration-section {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 90%;
  }

  .registration-section-input {
    color: grey;
    padding-left: 5px;
    font-size: 14px;
    height: 30px;
    width: 33%;
    border: solid 1px;
    border-color: lightgrey;
    border-radius: 4px;
  }

  .registration-section-source {
    width: 33%;
    border: solid 1px;
    border-radius: 4px;
    border-color: lightgrey;
    font-size: 14px;
    color: grey;
    height: 30px;
  }

  .registration-section-body {
    padding-top: 3px;
    width: 100%;
  }

/* Social Media Selector Styling */

  .social-media-inputs {
    display: flex;
    width: 100%;
    padding-top: 10px;
  }

  .social-media-inputs-one {
    width: 25%;
  }

  .social-media-inputs-two {
    display: flex;
    width: 75%;
  }

  .social-media-inputs-inner {
    width: 50%;
    padding-right: 10px;
    top: 50%;
    bottom: 50%;
  }

  .social-media-input-text {
    width: 100%;
    border: solid 1px;
    border-radius: 4px;
    border-color: lightgrey;
    font-size: 14px;
    color: grey;
    height: 30px;
    padding-left: 5px;
  }

/* Registration Button */
  .registration-button {
    background-color: orange;
    color: white;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .align-button {
    display: flex;
  }
  
</style>