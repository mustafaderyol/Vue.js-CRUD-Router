import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
