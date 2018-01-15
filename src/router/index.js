import Vue from 'vue'
import Router from 'vue-router'

import Cards from '@/components/Cards'
import Portfolio from '@/components/Portfolio'
import addPortfolio from '@/components/addPortfolio'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import News from '@/components/News'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/hi',
      name: 'Portfolio',
      component: Portfolio,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add',
      name: 'addPortfolio',
      component: addPortfolio
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path:'*',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser && to.path != '/Portfolio') next('login')
  else next()
})

export default router
