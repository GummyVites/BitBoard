import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/Cards'
import Portfolio from '@/components/Portfolio'
import addPortfolio from '@/components/addPortfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/hi',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/add',
      name: 'addPortfolio',
      component: addPortfolio
    }
  ]
})
