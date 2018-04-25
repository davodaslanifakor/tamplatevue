import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '~/i18n'
import sidebar from './modules/sidebar.js' 
import navbar from './modules/navbar.js' 
Vue.use(Vuex)
export const store = new Vuex.Store({
  strict: true,
  modules: {
    sidebar,
    navbar
  },
})
