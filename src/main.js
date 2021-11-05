import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

Vue.config.productionTip = false

/**首页数据模拟json */
require("./mock/index.js")

import "@/common/scss/reset.scss"
import "@/common/scss/base.scss"

Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')