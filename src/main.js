// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('vue2-animate/dist/vue2-animate.min.css')
require("./assets/css/main.css")

import DefaultLayout from '~/layouts/Default.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueTypedJs from 'vue-typed-js'
import Vuex from 'vuex'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faHashtag, faRss, faSitemap, faVideo, faVolumeUp } from '@fortawesome/free-solid-svg-icons'


config.autoAddCss = false;
library.add(faVolumeUp, faVideo, faHashtag, faSitemap, faRss)


export default function (Vue, {router, appOptions}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(vueSmoothScroll, {duration:2000})
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueTypedJs)

  router: {
    mode: 'history'
  }

  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    strict: true,
    state: {
      currentStep: 0,
      email: "",
      tel: "",
      budget: 0,
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
      updateDesc (state, s) {
        state.desc = s;
      },
      updateName (state, s) {
        state.desc = s;
      },
      updateEmail (state, s) {
        state.desc = s;
      }
    }
  })
}
