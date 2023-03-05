import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Ourstore from '../view/Ourstore.vue'
import Promotions from '../view/Promotions.vue'
import Aboutus from '../view/Aboutus.vue'
import Product from '../view/Product_Detail.vue'
import Applyloan from '../view/Applyloan.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ourstore',
      name: 'ourstore',
      component: Ourstore,
    },
    {
      path: '/promotions',
      name: 'promotions',
      component: Promotions
    },
    {
      path: '/applyloan',
      name: 'applyloan',
      component: Applyloan
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
     
    },
    {
      path: '/ourstore/:id',
      name: 'ourstoreid',
      component: Ourstore
    },
  ]
  
})

export default router
