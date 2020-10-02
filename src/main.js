import Vue from 'vue';

import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);

import Vue2TouchEvents from 'vue2-touch-events';
Vue.use(Vue2TouchEvents);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret);
library.add(faGooglePlay, faAppStore);
Vue.component('font-awesome-icon', FontAwesomeIcon)

// import vuetify from './plugins/vuetify' // path to vuetify export
// import Vuetify from 'vuetify/lib'
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue';
import router from './router';

import '@/assets/scss/style.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
