import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CopyRight from '@/components/CopyRight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
		{
		  path: '/footer',
		  name: 'footer',
		  component: CopyRight
		}
  ]
})
