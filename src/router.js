import Vue from "vue";
import Router from "vue-router";

// Main
import Home from "./views/main/Home.vue";
import Buy from "./views/main/Buy.vue";
import About from "./views/main/About.vue";
import Team from "./views/main/Team.vue";
import Contact from "./views/main/Contact.vue";

// eCommerce
import CheckoutPage from "./views/ecommerce/CheckoutPage.vue";
import PayWithCreditCard from "./views/ecommerce/PayWithCreditCard.vue";
import OrderSuccess from "./views/ecommerce/OrderSuccess.vue";
import OrderFailurePage from "./views/ecommerce/OrderFailurePage.vue";
import PaymentPage from "./views/ecommerce/PaymentPage.vue";

// Misc
import PrivacyPolicy from "./views/misc/PrivacyPolicy.vue";
import TermsOfService from "./views/misc/TermsOfService.vue";
import PageNotFoundPage from "./views/misc/404notFound.vue";
import PromoPage from "./views/misc/promo.vue";

// Affiliate
import AffiliateLogin from "./views/affiliate/Affiliate.vue";
import AffiliateDashboard from "./views/affiliate/AffiliateDashboard.vue";
import AffiliateTransactions from "./views/affiliate/AffiliateTransactions.vue";
import AffiliateAccount from "./views/affiliate/AffiliateAccount.vue";

// Admin
import Admin from "./views/admin/Admin.vue";
import AdminLogin from "./views/admin/AdminLogin.vue";

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
    
    // ******************************************
    // Promo Redirect
    
    {
      path: "/promo",
      name: "PromoPage",
      component: PromoPage
    },
    {
      path: "/promo/*",
      name: "PromoPage",
      component: PromoPage
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
