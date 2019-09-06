import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue'


Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(Button)


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
