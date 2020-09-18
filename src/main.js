// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('typeface-nunito-sans')

import DefaultLayout from '~/layouts/Default.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueTypedJs from 'vue-typed-js'


export default function (Vue, {router}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(vueSmoothScroll, {duration:2000})
  Vue.use(VueTypedJs)

  router: {
    mode: 'history'
  }
}