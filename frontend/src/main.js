// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'

import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
// Sets the default url used by all of this axios instance's requests

Vue.prototype.$axios = axios

axios.defaults.baseURL = ''
axios.defaults.headers.get['Accept'] = 'application/json'


// Sync store with router
sync(store, router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
