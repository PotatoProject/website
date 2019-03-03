import '@babel/polyfill'
import './plugins/vuetify'

import App from './App.vue'
import Axios from 'axios'
import Vue from 'vue'
import VueImg from 'v-img'
import marked from '@/mixins/marked'
import router from './router'

Vue.use(VueImg);

Vue.mixin(marked);

Vue.config.productionTip = false

Vue.prototype.$http = Axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

