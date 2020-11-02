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
    // this must be last
    {
      path: "/*",
      name: "404",
      component: PageNotFoundPage
    }
  ],
  mode: "history"
});
