import Vue from 'vue'
import Router from 'vue-router'
import sample from './sample'
import Layout from '@/components/commonLayout/Layout'

Vue.use(Router)

export default new Router({
//  mode: 'hash',
	mode: 'history',	/* url # 제거 */
  linkActiveClass: 'open active',
  scrollBehavior: function () {
    return { y: 0 }
  },
  
  routes: [
  {
	path: '/',
	redirect: '/sample',
	name: 'sample',
	component: Layout,
	children: [
      ...sample
    ]
  }
  ]
})

