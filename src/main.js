// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app', // 第一种方式挂载
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app'); // 第二种方式挂载
