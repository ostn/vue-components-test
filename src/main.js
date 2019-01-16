// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//页面顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
    window.scroll(0,0);
    NProgress.start();
		
		setTimeout(() => {
			NProgress.done();
		}, 4000)
		
});

router.afterEach(() => {
    NProgress.done();
});

/* eslint-disable no-new */
new Vue({
  // el: '#app', // 第一种方式挂载
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app'); // 第二种方式挂载
