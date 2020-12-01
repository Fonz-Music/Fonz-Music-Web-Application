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

// Affiliate
import AffiliateHome from "./views/Affiliate/AffiliateHome.vue";
import AffiliateAnalytics from "./views/Affiliate/AffiliateAnalytics.vue";
import AffiliateFinancial from "./views/Affiliate/AffiliateFinancial.vue";
import AffiliateProfile from "./views/Affiliate/AffiliateProfile.vue";

// Admin
import AdminHome from "./views/Admin/AdminHome.vue";

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
      path: "/privacyPolicy",
      name: "privacyPolicy",
      component: PrivacyPolicy
    },
    {
      path: "/tos",
      name: "tos",
      component: TermsOfService
    },

    // Affiliate Program
    {
      path: "/affiliate-home",
      name: "affiliateHome",
      component: AffiliateHome
    },

    // Affiliate Analytics
    {
      path:"/affiliate-analytics",
      name:"affiliateanalytics",
      component: AffiliateAnalytics
    },

    // Affiliate Financial
    {
      path:"/affiliate-financial",
      name:"affiliatefinancial",
      component: AffiliateFinancial
    },

    // Affiliate Profile
    {
      path:"/affiliate-profile",
      name:"affiliateprofile",
      component: AffiliateProfile
    },

    // Admin Home
    {
      path:"/admin-home",
      name:"adminhome",
      component: AdminHome
    },

    // this must be last
    {
      path: "/*",
      name: "404",
      component: PageNotFoundPage
    }
  ],
  mode: "history"
});
