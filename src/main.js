import Vue from "vue";

import Fragment from "vue-fragment";
Vue.use(Fragment.Plugin);

import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay, faAppStore } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faUserSecret);
library.add(faGooglePlay, faAppStore);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// import vuetify from './plugins/vuetify' // path to vuetify export
// import Vuetify from 'vuetify/lib'
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";

import "@/assets/scss/style.scss";

Vue.config.productionTip = false;
// Vue.prototype.$API_URL = "http://localhost:5001/fonz-music-web/us-central1/app";
Vue.prototype.$API_URL = "https://web.fonzmusic.com";
// Vue.prototype.currency = localStorage.getItem("currency");
// Vue.prototype.currencySymbol =;
Vue.prototype.cartId = localStorage.getItem("cartId") || "";

// progress bars

const axios = require("axios");

let setCurrency = "eur";
var localCurrency = localStorage.getItem("currency");
var lastTimeChecked = getWithExpiry("timestamp");
// console.log("local cur " + localCurrency);
if (localCurrency == undefined || lastTimeChecked == null) {
  axios
    .get(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=eb598e256fe04910a25aba0bce726785"
    )
    .then(resp => {
      console.error("runnign this code ");
      let country_code = resp.data.country_code;
      if (country_code == "US") {
        setCurrency = "usd";
      } else if (country_code == "GB") {
        setCurrency = "gbp";
      }
      // Vue.prototype.currency = setCurrency;
      setWithExpiry("timestamp", setCurrency, 604800000);
      localStorage.setItem("currency", setCurrency);
      localStorage.setItem("country", country_code);
    })
    .catch(error => {
      console.error("COULD NOT GET LOCATION DATA FOR PRICING ", error);
    });
}

// adds timestamp to localstorage
function setWithExpiry(key, value, ttl) {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
}

// this gets the timestamp
function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  console.log(itemStr);
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

Vue.prototype.currency = localStorage.getItem("currency") || "eur";
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// google maps
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAzcEk4PpytcOS5NQXd3XxleU57lD9047A",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
});

// const https = require("https");
// https
//   .get(
//     "https://ipgeolocation.abstractapi.com/v1/?api_key=eb598e256fe04910a25aba0bce726785",
//     resp => {
//       let data = "";
//       // A chunk of data has been received.
//       resp.on("data", chunk => {
//         data += chunk;
//       });

//       // The whole response has been received. Print out the result.
//       resp.on("end", () => {
//         let setCurrency = "eur";
//         var userInfo = JSON.parse(data);
//         // console.log(userInfo.country_code);
//         if (userInfo.country_code == "US") {
//           setCurrency = "usd";
//         } else if (userInfo.country_code == "GB") {
//           // console.log("going w gbp ");
//           setCurrency = "gbp";
//         // } else {
//         //   // console.log("going w eur ");
//           // setCurrency = "EUR";
//         }
//         // Vue.prototype.currency = localStorage.getItem("currency") || "eur";
//         console.log(setCurrency, " this currency")
//         Vue.prototype.currency = setCurrency;
//         localStorage.setItem("currency", setCurrency);
//       });
//     }
//   )
//   .on("error", err => {
//     this.currency = "eur";
//     // console.log("Error: " + err.message);
//   });
