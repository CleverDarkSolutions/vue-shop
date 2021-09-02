import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Merch from '../views/Merch.vue'
import AddProduct from '../views/AddProduct.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import ProductPreview from '../views/ProductPreview.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/merch',
    name: 'Merch',
    component: Merch
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/productPreview',
    name: 'ProductPreview',
    component: ProductPreview
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
