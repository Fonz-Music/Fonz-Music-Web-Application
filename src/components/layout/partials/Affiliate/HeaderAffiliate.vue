<template>
  <header
    class="site-header"
    :class="bottomOuterDivider && 'has-bottom-divider'"
  >
    <div class="container">
      <div
        class="site-header-inner"
        :class="bottomDivider && 'has-bottom-divider'"
      >
        <router-link class="header-logo" to="/"
          ><img src="@/assets/images/logo.svg" class="header-logo" alt="logo"
        /></router-link>

        <!-- <c-logo />
        <c-logoHeader /> -->
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
                <router-link 
                to="/affiliate-login/"
                @click='signOut()'>
                LOG OUT
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import CLogo from "@/components/layout/partials/Logo.vue";
import CLogoHeader from "@/components/layout/partials/LogoHeader.vue";
import router from "@/router.js";

export default {
  name: "CHeaderAffiliate",
  components: {
    CLogo,
    CLogoHeader
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
      isActive: this.active || false
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
            .then(() => {
                console.log('signed out');
            })
            .catch(() => {
                console.log("error");
      })
    }
  },

  mounted() {
    this.active && this.openMenu();
    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
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
              console.log("header listener: logged out");
              router.push('/affiliate-login');
          }
      });
    }
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
