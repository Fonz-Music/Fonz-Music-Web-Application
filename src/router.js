import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Buy from "./views/Buy.vue";
import About from "./views/About.vue";
import Team from "./views/Team.vue";
import Contact from "./views/Contact.vue";
import CheckoutPage from "./views/CheckoutPage.vue";
import PayWithCreditCard from "./views/PayWithCreditCard.vue";
import OrderSuccess from "./views/OrderSuccess.vue";
import PageNotFoundPage from "./views/404notFound.vue";
import OrderFailurePage from "./views/OrderFailurePage.vue";
import PayWithCreditCardVue from "./views/PayWithCreditCardVue.vue";
import PaymentPage from "./views/PaymentPage.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import TermsOfService from "./views/TermsOfService.vue";

import AffiliateHome from "./views/Affiliate/AffiliateHome.vue";
import AffiliateAnalytics from "./views/Affiliate/AffiliateAnalytics.vue";
import AffiliateFinancial from "./views/Affiliate/AffiliateFinancial.vue";
import AffiliateProfile from "./views/Affiliate/AffiliateProfile.vue";

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

    // this must be last
    {
      path: "/*",
      name: "404",
      component: PageNotFoundPage
    }
  ],
  mode: "history"
});
