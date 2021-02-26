import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 测试
import Header from '../testing/Header.vue'
// 测试
import Button from '../testing/Button.vue'
// 测试
import Field  from '../testing/Field.vue'
// 测试
import Navbar  from '../testing/Navbar.vue'
// 测试
import Badge  from '../testing/Badge.vue'
// 测试
// 测试
import Register from '../views/Register.vue'
// 测试
import Article from '../views/Article.vue'
// 测试
import Login from '../views/Login.vue'
// 测试
import Order from '../views/Order.vue'
// 测试
import Register1 from '../testing/Register1.vue' 
// 测试
import Login1 from '../testing/Login1.vue'
//测试
import Infinite from '../testing/Infinite.vue'
import Access1 from '../testing/Access1.vue'
import Access2 from '../testing/Access2.vue'
import Changeage from '../testing/Changeage.vue'
import Addfriend from '../testing/Addfriend.vue'
import Ajax from '../testing/Ajax.vue'
import Order1 from '../testing/Order1.vue'







Vue.use(VueRouter)

const routes = [
  // 测试
  {
    path:'/header',
    component:Header
  },
  // 测试
  {
    path:'/button',
    component:Button
  },
  // 测试
  {
    path:'/field',
    component:Field
  },
  
  
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/article/:id',
    component:Article
  },
  
  
  
  {
    path:'/register1',
    component:Register1
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/order1',
    component:Order1
  },
  {
    path:'/login1',
    component:Login1
  },
  {
    path:'/navbar',
    component:Navbar
  },
  {
    path:'/badge',
    component:Badge
  },
  {
    path:'/access1',
    component:Access1
  },
  {
    path:'/access2',
    component:Access2
  },
  {
    path:'/changeage',
    component:Changeage
  },
  {
    path:'/addfriend',
    component:Addfriend
  },
  {
    path:'/ajax',
    component:Ajax
  },
  {
    path:'/infinite',
    component:Infinite
  },

  {
    path: '/',
    name: 'Home',
    component: Home
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
