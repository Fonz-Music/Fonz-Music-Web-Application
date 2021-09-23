<template>
    <header
      class="site-header"
      :class="bottomOuterDivider && 'has-bottom-divider'"
    >
    <c-registration-modal @accountRegisteredEvent="updateModal($event)" v-if="!isRegistered"/>

      <div class="container">
          <div
            class="site-header-inner"
            :class="bottomDivider && 'has-bottom-divider'"
          >
            <router-link class="header-logo" to="/"
              ><img src="@/assets/images/logo.svg" class="header-logo" alt="logo"
            /></router-link>

                <button
                    v-if="!hideNav"
                    ref="hamburger"
                    class="header-nav-toggle"
                    aria-controls="primary-menu"
                    :aria-expanded="isActive ? 'true' : 'false'"
                    @click="isActive ? closeMenu() : openMenu()"
                >
                    <span class="screen-reader">Menu</span>
                    <span class="hamburger">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <nav
                    v-if="!hideNav"
                    ref="nav"
                    class="header-nav"
                    :class="{ 'is-active': isActive }"
                >
                    <div class="header-nav-inner">

                        <ul
                            class="list-reset text-xxs"
                            :class="navPosition && `header-nav-${navPosition}`"
                        >
                            <li>
                                <router-link to="/affiliate/">Dashboard</router-link>
                            </li>
                        </ul>

                        <ul
                            class="list-reset text-xxs"
                            :class="navPosition && `header-nav-${navPosition}`"
                        >
                            <li>
                                <router-link to="/affiliate-transactions/">Transactions</router-link>
                            </li>
                        </ul>

                        <ul
                            class="list-reset text-xxs"
                            :class="navPosition && `header-nav-${navPosition}`"
                        >
                            <li>
                                <router-link to="/affiliate-account/">Account</router-link>
                            </li>
                        </ul>

                        <ul
                            class="list-reset text-xxs"
                            :class="navPosition && `header-nav-${navPosition}`"
                        >
                            <li>
                                <c-button @click="signOut()"> LOG OUT </c-button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
const axios = require("axios");

import CLogo from "@/layouts/partials/Logo.vue";
import CLogoHeader from "@/layouts/headers/LogoHeader.vue";
import router from "@/router.js";
import CButton from "@/components/elements/Button.vue";
import CRegistrationModal from '@/components/sections/affiliateSections/dashboardPage/RegistrationModal.vue';

export default {
        name: "CHeaderAffiliate",
        components: {
        CLogo,
        CLogoHeader,
        CButton,
        CRegistrationModal
    },

    props: {
        active: Boolean,
        navPosition: {
            type: String,
            default: ""
        },
        hideNav: {
            type: Boolean,
            default: false
        },
        hideSignin: {
            type: Boolean,
            default: false
        },
        bottomOuterDivider: {
            type: Boolean,
            default: false
        },
        bottomDivider: {
            type: Boolean,
            default: false
        }
    },
    
    data() {
        return {
            isActive: this.active || false,
            isRegistered: true
        };
    },

    watch: {
        active(value) {
            this.isActive = value;
        }
    },

    methods: {
        openMenu() {
            document.body.classList.add("off-nav-is-active");
            if (this.$refs.nav)
                this.$refs.nav.style.maxHeight = this.$refs.nav.scrollHeight + "px";
            this.$emit("update:active", true);
            this.isActive = true;
        },

        closeMenu() {
            document.body.classList.remove("off-nav-is-active");
            if (this.$refs.nav) this.$refs.nav.style.maxHeight = null;
            this.$emit("close");
            this.$emit("update:active", false);
            this.isActive = false;
        },

        keyPress() {
            this.isActive && event.keyCode === 27 && this.closeMenu();
        },

        clickOutside(e) {
            if (!this.$refs.nav) return;
            if (
                !this.isActive ||
                this.$refs.nav.contains(e.target) ||
                e.target === this.$refs.hamburger
            )
                return;
            this.closeMenu();
        },

        async signOut() {
          firebase.auth().signOut()
          .catch((error) => {
            console.log(error);
          })
        },

      async checkIfRegistered() {
        let self = this;
        firebase.auth().currentUser.getIdToken().then(function(idToken) {
          axios.get("/i/affiliate/profile", {
            headers: {
              Authorization: `Bearer ${ idToken }`
            }
          }).then(function(resp) {
            self.isRegistered = true;
          }).catch((e) => {
            console.log(e);
            self.isRegistered = false;
          })
        })
      },

      updateModal(m) {
        this.isRegistered = m;
      }
    },

    mounted() {
        this.active && this.openMenu();
        document.addEventListener("keydown", this.keyPress);
        document.addEventListener("click", this.clickOutside);
    },

    beforeMount() {
        this.checkIfRegistered();
    },
    
    beforeDestroy() {
        document.addEventListener("keydown", this.keyPress);
        document.removeEventListener("click", this.clickOutside);
        this.closeMenu();
    },

    created() {
    // Firebase Listener
      firebase.auth().onAuthStateChanged(function(user) {
        if(!user) {
          router.push('/affiliate-login').catch(() => {});
        }
      });
    },
};
</script>

<style media="screen">
.header-logo img {
    margin: 400px auto;
    width: 10vw;

    /* height: 10vw; */
    max-width: 80px;
    min-width: 70px;
}
</style>
