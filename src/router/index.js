// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login.vue')
  },
  {
    path:'/home',
    name:'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path:'/chat',
    name:'Chat',
    component: () => import('@/pages/chat.vue')
  },  
  {
    path:'/contact',
    name:'Contact',
    component: () => import('@/pages/Contact.vue')
  },
  {
    path:'/profile',
    name:'Profile',
    component: () => import('@/pages/Profile.vue')
  },  
  {
    path:'/edit_profile',
    name:'Edit Profile',
    component: () => import('@/pages/EditProfile.vue')
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
