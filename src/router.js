import Vue from "vue";
import Router from "vue-router";

// Main
import Home from "./views/Main/Home.vue";
import Buy from "./views/Main/Buy.vue";
import About from "./views/Main/About.vue";
import Team from "./views/Main/Team.vue";
import Contact from "./views/Main/Contact.vue";

// eCommerce
import CheckoutPage from "./views/eCommerce/CheckoutPage.vue";
import PayWithCreditCard from "./views/eCommerce/PayWithCreditCard.vue";
import OrderSuccess from "./views/eCommerce/OrderSuccess.vue";
import OrderFailurePage from "./views/eCommerce/OrderFailurePage.vue";
import PayWithCreditCardVue from "./views/eCommerce/PayWithCreditCardVue.vue";
import PaymentPage from "./views/eCommerce/PaymentPage.vue";

// Misc
import PrivacyPolicy from "./views/Misc/PrivacyPolicy.vue";
import TermsOfService from "./views/Misc/TermsOfService.vue";
import PageNotFoundPage from "./views/Misc/404notFound.vue";
import BugFixForm from "./views/Misc/BugFormPage.vue";
import EmailSignup from "./views/Misc/EmailSignup.vue";

// Affiliate
import AffiliateLogin from "./views/Affiliate/AffiliateSplash.vue";
import AffiliateDashboard from "./views/Affiliate/AffiliateDashboard.vue";
import AffiliateTransactions from "./views/Affiliate/AffiliateTransactions.vue";
import AffiliateAccount from "./views/Affiliate/AffiliateAccount.vue";

// Admin
import Admin from "./views/Admin/Admin.vue";
import AdminLogin from "./views/Admin/AdminLogin.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/buy",
      name: "buy",
      component: Buy
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutPage
    },
    {
      path: "/paywithcreditcard",
      name: "paywithcreditcard",
      component: PayWithCreditCard
    },
    {
      path: "/ordersuccess",
      name: "ordersuccess",
      component: OrderSuccess
    },
    {
      path: "/orderfailure",
      name: "orderfailure",
      component: OrderFailurePage
    },
    {
      path: "/payvue",
      name: "payvue",
      component: PayWithCreditCardVue
    },
    {
      path: "/paymentPage",
      name: "paymentPage",
      component: PaymentPage
    },
    {
      path: "/privacy-policy",
      name: "privacyPolicy",
      component: PrivacyPolicy
    },
    {
      path: "/tos",
      name: "tos",
      component: TermsOfService
    },
    {
      path: "/bugfix",
      name: "bugfix",
      component: BugFixForm
    },
    {
      path: "/email",
      name: "email",
      component: EmailSignup
    },

    // ******************************************
    // Affiliate Program
    
    {
      path: "/affiliate-login",
      name: "affiliatelogin",
      component: AffiliateLogin
    },

    {
      path: "/affiliate",
      name: "affiliateDashboard",
      component: AffiliateDashboard
    },

    {
      path: "/affiliate-transactions",
      name: "affiliateTransactions",
      component: AffiliateTransactions
    },

    {
      path: "/affiliate-account",
      name: "affiliateAccount",
      component: AffiliateAccount
    },


    // ******************************************
    // Admin

    {
      path: "/admin",
      name: "Login",
      component: Admin
    },

    {
      path: "/admin-login",
      name: "Login",
      component: AdminLogin
    },


    // ******************************************
    // this must be last
    {
      path: "/*",
      name: "404",
      component: PageNotFoundPage
    }
  ],
  mode: "history"
});
