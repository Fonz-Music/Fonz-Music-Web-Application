<template>
    <fragment>
      <section class="section reveal-from-bottom">
        <div class="section-inner">
          <div class="container">
            <div id="wrapper">
              <div class="row justify-content-center">
                <div id="image">
                  <c-image :src="require('@/assets/images/affiliateProgram/splashArt-01.png')"/>
                </div>
                <div id="overlay">
                  <div class="heading">
                    <span> share the party </span>
                  </div>
                  <div>
                    <c-button @click="openModal()"> log in / register </c-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <c-affiliate-info class="reveal-from-top"/>
      <c-affiliate-tiles class="reveal-from-bottom"/>

      <section id="modal" v-show="showModal">
        <div class="modal-background">
          <div class="modal-content">
            <div class="container">
              <c-button @click="closeModal()" class="close"> x </c-button>
              <div class="row justify-content-center">

                <div v-show="!showRegistration">
                  <form>
                    <fieldset>
                      <c-input
                      id="loginEmail"
                      type="email"
                      placeholder="didi@fonz.com"
                      label="e-mail"
                      required
                      />
                      <c-input
                      id="loginPassword"
                      type="password"
                      label="password"
                      placeholder = "*****"
                      required
                      />
                    </fieldset>
                  </form>
                  <div v-if='createdAccountError' class="container"> 
                      <div class="row justify-content-center">
                          <p>
                          Invalid e-mail or an account already exists with this name.                    
                          </p>
                      </div>
                  </div>

                  <div v-if='incorrectLogin' class="container mt-16"> 
                      <div class="row justify-content-center">
                          <p>
                              Your e-mail or password is incorrect.
                          </p>
                      </div>
                  </div>
                  
                  <div class="button-padding">
                    <c-button class="button-style" @click="signInEmail()"> 
                      <span style="color:white;"> Log In </span>
                    </c-button>
                    <c-button @click="toRegister()"> Sign Up </c-button>
                  </div>
                </div>

                <div v-show="showRegistration">
                  <form>
                    <fieldset>
                      <c-input
                      id="registerName"
                      type = "text"
                      placeholder = "name"
                      label = "name"
                      required
                      />
                      <c-input
                      id="registerEmail"
                      type="email"
                      placeholder="e-mail"
                      label="e-mail"
                      required
                      />
                      <c-input
                      id="registerPassword"
                      type="password"
                      placeholder = "password"
                      label="password"
                      required
                      />
                      <c-input
                      id="registerConfirmPassword"
                      type="password"
                      placeholder = "confirm password"
                      label="confirm password"
                      required
                      />
                    </fieldset>
                  </form>
                  <div v-if='passwordsDoNotMatch' class="container"> 
                      <div class="row justify-content-center">
                          <p>
                          your passwords do not match.                    
                          </p>
                      </div>
                  </div>

                  <div v-if='emailNotFormatted' class="container mt-16"> 
                      <div class="row justify-content-center">
                          <p>
                              your e-mail is not formatted properly.
                          </p>
                      </div>
                  </div>
                  <div v-if='createdAccountError' class="container"> 
                      <div class="row justify-content-center">
                          <!-- <p>
                          Invalid e-mail or an account already exists with this name.                    
                          </p> -->
                          <p>{{reasonFailed}}</p>
                      </div>
                  </div>

                  
                  <div class="button-padding">
                    <c-button @click="registerEmail()"> Register </c-button>
                    <c-button @click="toLogin()"> Go Back </c-button>
                  </div>
                </div>

              </div> 
            </div>
          </div>
        </div>
      </section>
    </fragment>
</template>

<script>
const axios = require("axios");

// Layout
import CLayout from "@/layouts/LayoutDefault.vue";
import router from "@/router.js";

// Required Components
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";
import CInput from "@/components/elements/Input.vue";

// Sections
import CLoginSection from "@/components/sections/Affiliate/Login/LoginSection.vue";
import CRegisterSection from "@/components/sections/Affiliate/Login/RegisterSection.vue";
import CAffiliateInfo from "@/components/sections/Affiliate/Splash/AffiliateInfo.vue";
import CAffiliateTiles from "@/components/sections/Affiliate/Splash/AffiliateTiles.vue";

export default {
    name:'AffiliateLogin',
    components: {
        CLoginSection,
        CRegisterSection,
        CButton,
        CImage,
        CAffiliateInfo,
        CAffiliateTiles,
        CInput
    },

    data() {
        return {
            showModal: false,
            showRegistration: false,
            createdAccountError: false,
            incorrectLogin: false,
            passwordsDoNotMatch: false,
            emailNotFormatted: false,
            reasonFailed: ""
        }
    },

    methods: {

      // Modal Controls
        openModal() {
          this.showModal = true;
        },
        closeModal() {
          this.showModal = false;
          this.showRegistration = false;
        },
        toLogin() {
          this.showRegistration = false;
        },
        toRegister() {
          this.showRegistration = true;
        },
        // checks to see if email is valid 
        emailIsValid: function(email) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },

      // Sign In / out Functionality
        async signInEmail() {
            var email = document.getElementById("loginEmail");
            var password = document.getElementById("loginPassword");

            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .catch((error) => {
              console.log(error);
              this.incorrectLogin = true;
              this.createdAccountError = false;
            })
        },

      // Registration Functionality
        async registerEmail() {
          let self = this

          var testPassword = document.getElementById("registerPassword").value;
          var testConfirmPassword = document.getElementById("registerConfirmPassword").value;
          
          // ensure passwords are the same 
          if(testPassword === testConfirmPassword) {
            this.passwordsDoNotMatch = false
            var email = document.getElementById("registerEmail").value;
            var password = testPassword;
            
            // ensure proper email format 
            if (this.emailIsValid(email)) {
              this.emailNotFormatted = false
              await firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    // self.registerAffiliate();
                    console.log("GAuth Account Created")
                })
                .catch((error) => {
                    console.log(error);
                    this.reasonFailed = error.message
                    console.log(this.reasonFailed);
                    this.createdAccountError = true;
                })
            }
            else {
              this.emailNotFormatted = true
              console.log("email not formatted ");
            }
          }
            else {
              this.passwordsDoNotMatch = true
              console.log("passwords dont match");
            } 
        },

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

    },


    created() {
        this.$emit("update:layout", CLayout);
        // Firebase Listener
        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                router.push('/affiliate').catch(() => {});
            }
        });
    }
}
</script>

<style scoped>
  #wrapper {
    position: relative !important;
  }

  #image {
    width: 1080px;
    height: 300px;
  }

  #overlay {
    position: absolute;
    padding-top: 50px;
    text-align: center;
    font-size: 40px;
    color: white;
    width: 1080px;
    font-weight: bold;
    height: 300px;
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

  .button-padding {
    padding-top: 20px;
  }
  
  .button-style {
    background-color: orange;
  }
</style>