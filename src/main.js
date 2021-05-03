import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
// import './plugins/element.js'

// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
