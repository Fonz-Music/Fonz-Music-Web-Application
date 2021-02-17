<template>
    <fragment>
      <section class="section">
        <div class="container">
          <div id="wrapper">
            <div class="row justify-content-center">
              <div id="image">
                <c-image :src="require('@/assets/images/affiliateProgram/splashArt-01.png')" :width="980"/>
              </div>
              <div id="overlay">
                <div class="heading">
                  <span> share the party </span>
                </div>
                <div class="button">
                  <span> log in / register </span>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>

      <c-affiliate-info/>



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

// Sections
import CLoginSection from "@/components/sections/Affiliate/Login/LoginSection.vue";
import CRegisterSection from "@/components/sections/Affiliate/Login/RegisterSection.vue";
import CAffiliateInfo from "@/components/sections/Affiliate/Splash/AffiliateInfo.vue";

export default {
    name:'AffiliateLogin',
    components: {
        CLoginSection,
        CRegisterSection,
        CButton,
        CImage,
        CAffiliateInfo
    },

    data() {
        return {
            isRegistering: false
        }
    },

    methods: {
        openRegistration() {
            this.isRegistering = true;
        },
        closeRegistration() {
            this.isRegistering = false;
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
    width: 980px;
    height: 300px;
  }

  #overlay {
    position: absolute;
    padding-top: 50px;
    text-align: center;
    font-size: 40px;
    color: white;
    width: 980px;
    font-weight: bold;
    height: 300px;
  }
</style>