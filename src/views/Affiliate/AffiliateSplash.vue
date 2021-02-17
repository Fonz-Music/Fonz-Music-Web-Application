<template>
    <fragment>
      <section class="section">
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
                <div class="button">
                  <button @click="openModal()"> log in / register </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <c-affiliate-info/>
      <c-affiliate-tiles/>

      <section id="modal" v-show="showModal">
        <div class="modal-background">
          <div class="modal-content">
            <div class="container">
              <button @click="closeModal()" class="close"> x </button>
              <div class="row justify-content-center">

                <div v-show="!showRegistration">
                  <form>
                    <fieldset>
                      <c-input
                      id="loginEmail"
                      type="email"
                      placeholder="e-mail"
                      label="e-mail"
                      required
                      />
                      <c-input
                      id="loginPassword"
                      type="password"
                      label="password"
                      placeholder = "password"
                      required
                      />
                    </fieldset>
                  </form>
                  <c-button @click="signInEmail()"> Log In </c-button>
                  <c-button @click="toRegister()"> Sign Up </c-button>
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
                  <c-button @click="registerEmail()"> Register </c-button>
                  <c-button @click="toLogin()"> Go Back </c-button>
                </div>

              </div> 
            </div>
          </div>
        </div>
      </section>
    </fragment>
</template>

<script>
// Layout
import CLayout from "@/layouts/LayoutDefault.vue";
import router from "@/router.js";

// Required Components
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";
import CModal from "@/components/elements/Modal.vue"
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
        CModal,
        CInput
    },

    data() {
        return {
            showModal: false,
            showRegistration: false,
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

      // Sign In / out Functionality
        async signInEmail() {
            var email = document.getElementById("loginEmail");
            var password = document.getElementById("loginPassword");

            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .catch((error) => {
              console.log(error);
            })
        },

      // Registration Functionality
        async registerEmail() {
          var testPassword = document.getElementById("registerPassword");
          var testConfirmPassword = document.getElementById("registerConfirmPassword");

          if(testPassword.value === testConfirmPassword.value) {
            var email = document.getElementById("registerEmail").value;
            var password = document.getElementById("registerPassword").value;
            await firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(() => {
                  this.registerAffiliate();
              })
              .catch((error) => {
                  console.log(error);
                  this.createdAccountError = true;
                  this.incorrectLogin = false;
              })
          }
        },

        async registerAffiliate() {
          if(firebase.auth().currentUser) {
            firebase.auth().currentUser.getIdToken().then(function(idToken) {
              axios.post("https://www.fonzmusic.com/i/affiliate/profile", {
                headers: {
                  Authorization: `Bearer ${ idToken }`
                }
              }).then(console.log("Affiliate Account Created"))
            })
          }
        }
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
</style>