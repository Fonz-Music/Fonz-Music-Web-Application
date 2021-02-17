<template>
    <fragment>
      <section class="section">
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
                  <button @click="openRegistration()"> log in / register </button>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>

      <c-affiliate-info/>
      <c-affiliate-tiles/>      
      <c-affiliate-register v-if="showRegistration"/>

        <!-- <div v-if='!isRegistering' class="container mt-16">
            <div class="row justify-content-center">
                <c-login-section/>
            </div>
            <div class="row justify-content-center">
                <c-button @click='openRegistration()'> register </c-button>
            </div>
        </div>

        <div v-else class="container mt-16"> 
            <div class="row justify-content-center">
                <c-register-section/>
            </div>
            <div class="row justify-content-center">
                <c-button @click='closeRegistration()'> back </c-button>
            </div>
        </div> -->


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

// Sections
import CLoginSection from "@/components/sections/Affiliate/Login/LoginSection.vue";
import CRegisterSection from "@/components/sections/Affiliate/Login/RegisterSection.vue";
import CAffiliateInfo from "@/components/sections/Affiliate/Splash/AffiliateInfo.vue";
import CAffiliateTiles from "@/components/sections/Affiliate/Splash/AffiliateTiles.vue";
import CAffiliateRegister from "@/components/sections/Affiliate/Splash/AffiliateRegister.vue";

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
        CAffiliateRegister
    },

    data() {
        return {
            showRegistration: false
        }
    },

    methods: {
        openRegistration() {
            this.showRegistration = true;
            console.log(this.showRegistration)
        },
        closeRegistration() {
            this.showRegistration = false;
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

</style>