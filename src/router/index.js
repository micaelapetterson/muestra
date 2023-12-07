import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import InfoView from '../views/InfoView.vue'
import VistaLogin from '../views/LoginView.vue'
import AppLayout from '@/layout/AppLayout.vue'
import Categoria from '@/views/admin/CategoriaView.vue'
import Producto from '@/views/admin/ProductoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: VistaLogin,
      meta: {redirectIfAuth: true}
    },
    {
      path: '/',
      name: 'login',
      component: VistaLogin,
      meta: {redirectIfAuth: true}
    },
    {
      path: '/admin',
      component: AppLayout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
          component: HomeView
        },
        {
          path: 'categoria',
          name: 'Categoria',
          component: Categoria,
          meta: {requireAuth: true}
        },
        {
          path: 'producto',
          name: 'Producto',
          component: Producto,
          meta: {requireAuth: true}
        },
      ]
    },
  ]
})


// Guard
router.beforeEach((to, from, next) =>{
  let token = localStorage.getItem("access_token")

  if(to.meta.requireAuth) {
    if(!token)
      return next({name: 'login'});
    return next()
  }

  if(to.meta.redirectIfAuth && token) {
    return next({name: 'home'})
  }

  return next()
})


export default router
