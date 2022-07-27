import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/index.less'

// svg组件
import SvgIcon from '@/components/SvgIcon'

// 1. 全局注册SvgIcon组件
Vue.component('SvgIcon', SvgIcon)
// 2. 载入所有svg icon
const requireContext = require.context('./assets/svgs', false, /\.svg$/)
requireContext.keys().forEach(requireContext)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
