import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/base.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  // render: h => h(Default)
}).$mount('#app')
