import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
 

  {
    path: '/',
    name: 'UserRegisterPage',
    component: () => import('../pages/UserRegisterPage.vue'),
  },
  {
    path: '/login',
    redirect: '/login.html' // Redirige a home.html en la carpeta public
  },

  {
    path: '/Registro',
    redirect: '/register.html ' // Redirige a home.html en la carpeta public
  },


  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: () => import('../views/DashboardPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
