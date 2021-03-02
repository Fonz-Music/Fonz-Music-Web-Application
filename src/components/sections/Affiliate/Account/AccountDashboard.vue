<template>
  <section class="section">
    <div v-if="isLoaded">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="tile-style tile-padding">
            <div class="row-12">
              <span style="font-weight: bold;"> Your Account </span>
            </div>

            <div class="row-12 font-padding">
              <table>
                <tbody>
                  <tr>
                    <td> E-mail: </td> <td> {{ this.email }} </td> 
                  </tr>
                  <tr>
                    <td> Level: </td> <td> 1 </td> 
                  </tr>
                  <tr>
                    <td> % Cut: </td> <td> 15.00% </td> 
                  </tr>
                  <tr>
                    <td> Coupon: </td> <td> {{ coupon }} </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-if="!couponRegistered" class="register-coupon row justify-content-center">
              <c-button @click="openCouponModal()" class="coupon-button"> Register Coupon </c-button>
            </div>

          </div>
        </div>

        <div class="col-8">
          <div class="tile-style tile-padding">
            <div class="row-12">
              <span style="font-weight: bold;"> Financials </span>
            </div>
            <div class="font-padding row-12">
              <span style="font-size: 15px;"> Our withdrawal system is currently under development. 
                If you've any queries, please don't hesitate to reach out to contact@fonzmusic.com.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="coupon-modal" v-show="showCouponModal">
      <div class="modal-background">
        <div class="modal-content">
          <div class="container">
            <c-button @click="closeCouponModal()" class="close"> x </c-button>

            <div class="container">
              <div class="row justify-content-center">
                <span> Register your Coupon Code </span>
              </div>
              <div class="row justify-content-center input-padding">
                <c-input
                id="registerCoupon"
                type="text"
                placeholder = "Your Coupon"
                required
                />
              </div>
              <div class="row justify-content-center">
                <c-button @click="registerCoupon()">
                  Register
                </c-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <div v-if="!isLoaded">
      <div class="container">
        <div class="row justify-content-center">
          <h1> Loading... </h1>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
const axios = require("axios");
import CButton from "@/components/elements/Button.vue";
import CInput from "@/components/elements/Input.vue";

export default {
  name: 'AccountDashboard',
  components: {
    CButton,
    CInput
  },
  data() {
    return {
      email: "",
      uid: "",
      couponRegistered: false,
      coupon: "Unregistered",
      showCouponModal: false,
      isLoaded: false
    }
  },

  methods: {
    async getUserCredentials() {
      var user = await firebase.auth().currentUser;
      if(user) {
        this.email = user.email;
        this.uid = user.uid;
      }
    },

    async checkCoupon() {
      let self = this;
      firebase.auth().currentUser.getIdToken().then(function(idToken) {
        axios.get("https://fonzmusic.com/i/affiliate/coupon", {
          headers: {
            Authorization: `Bearer ${ idToken }`
          }
        })
        .then(function(resp) {
            self.couponRegistered = true;
            self.coupon = resp.data.couponCode;
            self.isLoaded = true;
        })
        .catch(function() {
          self.isLoaded = true;
        })
      })
    },

    openCouponModal() {
      this.showCouponModal = true;
    },

    closeCouponModal() {
      this.showCouponModal = false;
    },

    async registerCoupon() {
      let self = this;

      var coupon = document.getElementById("registerCoupon").value;
      var payload = {
        couponCode: coupon
      }

      firebase.auth().currentUser.getIdToken().then(function(idToken) {
        axios.post("/i/affiliate/coupon", payload, {
          headers: {
            Authorization: `Bearer ${ idToken }`
          }
        }).then(function() {
          self.showCouponModal = false;
          self.couponRegistered = true;
          self.checkCoupon();
        })
        .catch({})
      })
    }
  },

  beforeMount() {
    this.getUserCredentials();
    this.checkCoupon();
  },
}
</script>

<style scoped>
  .tile-style {
    background-color: white;
    border: solid 1px;
    border-color: lightgrey;
  }

  .tile-padding {
    padding: 10px;
  }

  .font-padding {
    padding-top: 10px;
  }

  .register-coupon {
    padding: 15px;
  }

  .coupon-button {
    background-color: orange;
    color: white;
  }

  .modal-background {
    position: fixed; 
    z-index: 999; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: hidden; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 24px;
  }

  .input-padding {
    padding: 25px;
  }
</style>