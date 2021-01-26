<template>
    <fragment>

        <div v-if='!isRegistering' class="container mt-16">
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
        </div>
    </fragment>
</template>

<script>
import CLayout from "@/layouts/LayoutDefault.vue";
import CLoginSection from "@/components/sections/Affiliate/Login/LoginSection.vue";
import CRegisterSection from "@/components/sections/Affiliate/Login/RegisterSection.vue";
import router from "@/router.js";
import CButton from "@/components/elements/Button.vue";

export default {
    name:'AffiliateLogin',
    components: {
        CLoginSection,
        CRegisterSection,
        CButton
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
                console.log("login listener: logged in");
                router.push('/affiliate-home');
                                
            }
            else {
                if (router.history.current.path != '/affiliate-login' ) {
                    console.log("login listener: logged out");
                    router.push('/affiliate-login');
                }
            }
        });
    }
}
</script>