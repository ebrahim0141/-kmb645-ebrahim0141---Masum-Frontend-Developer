import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Countries_code from '@/components/Countries_code'
import Countries from '@/components/Countries'


Vue.use(Router)

export default new Router({
  mode :'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/countries_code',
      name: 'Countries_code',
      component: Countries_code
    },

    {
      path: '/countries',
      name: 'Countries',
      component: Countries
    },
  ]
})
