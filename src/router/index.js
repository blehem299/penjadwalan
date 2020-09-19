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
    path: '/daftar',
    name: 'Daftar',
    component: () => import('../views/Daftar.vue')
  },
  {
    path: '/pengajar',
    name: 'Pengajar',
    component: () => import('../views/Pengajar.vue')
  },
  {
    path: '/mengajar',
    name: 'Mengajar',
    component: () => import('../views/Jadwal.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
})

export default router
