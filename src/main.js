// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('typeface-nunito-sans')
require('animate.css')

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
    state: {
      currentStep: 0,
      email: "",
      tel: "",
      budget: 0,
      servicesNeeded: 0,
      audio: false,
      video: false,
      social: false,
      web: false,
      stream: false
    },
    mutations: {
      next (state) {
        state.currentStep++
      },
      previous (state) {
        state.currentStep--
      },
      toggleService (state, s) {
        if (state.choice.has(s)) {
          state.choice.delete(s)
          state.servicesNeeded--
        } else {
          state.choice.add(s)
          state.servicesNeeded++
        }
      },
      toggleAudio(state) {
        if (state.audio == true) {
          state.audio = false
          state.servicesNeeded--
        } else {
          state.audio = true
          state.servicesNeeded++
        }
      },
      toggleVideo(state) {
        if (state.video == true) {
          state.video = false
          state.servicesNeeded--
        } else {
          state.video = true
          state.servicesNeeded++
        }
      },
      toggleSocial(state) {
        if (state.social == true) {
          state.social = false
          state.servicesNeeded--
        } else {
          state.social = true
          state.servicesNeeded++
        }
      },
      toggleWeb(state) {
        if (state.web == true) {
          state.web = false
          state.servicesNeeded--
        } else {
          state.web = true
          state.servicesNeeded++
        }
      },
      toggleStream(state) {
        if (state.stream == true) {
          state.stream = false
          state.servicesNeeded--
        } else {
          state.stream = true
          state.servicesNeeded++
        }
      }
    }
  })
}
