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
                      <td class="table-weight"> Name: </td> <td> {{ this.profileData.displayName }} </td>
                    </tr>
                    <tr>
                      <td class="table-weight"> E-mail: </td> <td> {{ this.email }} </td> 
                    </tr>
                    <tr>
                      <td class="table-weight"> Level: </td> <td> {{ this.profileData.level }} </td> 
                    </tr>
                    <tr>
                      <td class="table-weight"> Cut: </td> <td> {{ this.profileData.percentageCut }}% </td> 
                    </tr>
                    <tr>
                      <td class="table-weight"> Coupon: </td> <td> {{ coupon }} </td>
                    </tr>
                  </tbody>
                </table>
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
    </div>

    <div v-if="!isLoaded">
      <div class="container">
        <div class="row justify-content-center">
          <h3> Loading... </h3>
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
      coupon: "",
      isLoaded: false,
      profileData: {}
    }
  },

  methods: {
    async getUserInfo() {
      let self = this;

      var user = await firebase.auth().currentUser;
      if(user) {
        self.email = user.email;
        self.uid = user.uid;
      }

      user.getIdToken().then(function(idToken) {
        axios.get('/i/affiliate/profile', {
          headers: {
            Authorization: `Bearer ${ idToken }`
          }
        }).then(function(resp) {
          self.profileData = resp.data;
          console.log(JSON.stringify(resp.data));
          self.isLoaded = true;
        })
      })
    },
  },

  beforeMount() {
    this.getUserInfo();
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

  .table-weight {
    color: grey;
    font-weight: bold;
  }
</style>