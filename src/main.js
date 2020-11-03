// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('vue2-animate/dist/vue2-animate.min.css')
require("./assets/css/main.css")

import DefaultLayout from '~/layouts/Default.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueTypedJs from 'vue-typed-js'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueScrollReveal from 'gridsome-scroll-reveal';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faHashtag, faRss, faSitemap, faVideo, faVolumeUp } from '@fortawesome/free-solid-svg-icons'


config.autoAddCss = false;
library.add(faVolumeUp, faVideo, faHashtag, faSitemap, faRss)


export default function (Vue, { router, head, isClient ,appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueScrollReveal, {
    duration: 1500,
  });
  Vue.use(vueSmoothScroll, {duration:2000})
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueTypedJs, VueAxios, axios)

  router: {
    mode: 'history'
  }

  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    strict: true,
    state: {
      currentStep: 0,
      name: "",
      email: "",
      tel: "",
      budget: "",
      serviceNeeded: "",
      serviceType: "",
      desc: ""
    },
    mutations: {
      next (state) {
        state.currentStep++
      },
      previous (state) {
        state.currentStep--
      },
      selectService (state, s) {
        state.serviceNeeded = s;
        state.currentStep++;
      },
      selectServiceType (state, s) {
        state.serviceType = s;
        state.currentStep++;
      },
      updateBudget (state, s) {
        state.budget = s;
        state.currentStep++;
      },
      updateDesc (state, s) {
        state.desc = s;
      },
      updatePhone (state, s) {
        state.tel = s;
      },
      updateName (state, s) {
        state.name = s;
      },
      updateEmail (state, s) {
        state.email = s;
      }
    }
  })
}
