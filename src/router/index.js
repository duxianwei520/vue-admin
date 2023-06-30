import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userHome from '../views/user/userHome.vue'
import user from '../views/user/user.vue'
import userProfile from '../views/user/userProfile.vue'
import userPosts from '../views/user/userPosts.vue'
import Login from '../views/Login.vue'
import Default from '../views/Default.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      { 
        path: '/user/:id',
        name: 'user',
        // component: () => import(/* webpackChunkName: "user" */ '../views/user/user.vue'),
        component: user,
        children: [
          // UserHome will be rendered inside User's <router-view>
          // when /user/:id is matched
          // { path: '', component: () => import(/* webpackChunkName: "userHome" */ '../views/user/userHome.vue') },
          { path: '', name: 'userHome', component: userHome },
          
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          // { path: 'profile', component: () => import(/* webpackChunkName: "userProfile" */ '../views/user/userProfile.vue'), },
          { path: 'userProfile', name: 'userProfile', component: userProfile },
    
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          // { path: 'posts', component: () => import(/* webpackChunkName: "userPosts" */ '../views/user/userPosts.vue'), }
          { path: 'userPosts', name: 'userPosts', component: userPosts },
        ]
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
]

const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach(async (to, from, next) => {
  if (
    // 检查用户是否已登录
    !sessionStorage.getItem('ticket') &&
    // ❗️ 避免无限重定向
    to.name !== 'Login'
  ) {
    // 将用户重定向到登录页面
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
