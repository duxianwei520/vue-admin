import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/userManage',
    name: 'UserManage',
    component: () => import(/* webpackChunkName: "userManage" */ '../views/UserManage.vue')
  },
  {
    path: '/roleManage',
    name: 'RoleManage',
    component: () => import(/* webpackChunkName: "roleManage" */ '../views/RoleManage.vue')
  },
  {
    path: '/moduleManage',
    name: 'ModuleManage',
    component: () => import(/* webpackChunkName: "moduleManage" */ '../views/ModuleManage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
