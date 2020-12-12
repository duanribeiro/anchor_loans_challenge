import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify)

const opts = {
  iconfont: 'mdi',
  theme: {
    dark: true,
    primary: colors.orange.base,
    secondary: colors.grey.darken4,
    error: colors.red.base
  }
}

export default new Vuetify(opts)
