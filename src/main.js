import Vue from 'vue'
import App from '~/layouts/default.vue'
import {store} from '~/store/store.js'
import i18n from '~/i18n'
import router from './routes.js'
import Vuebar from 'vuebar';
import VueModalTor from 'vue-modaltor'
Vue.use(VueModalTor)
require("./css.js");

Vue.use(Vuebar);
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App)
})
