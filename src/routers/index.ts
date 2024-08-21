import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    redirect: '/login.html' // Redirige a login.html en la carpeta public
  },
  {
    path: '/registro',
    redirect: '/register.html' // Redirige a register.html en la carpeta public
  },
  {
    path: '/home',
    redirect: '/home.html' // Redirige a home.html en la carpeta public
  },
  {
    path: '/about',
    component: () => import('../views/AppAbout.vue') // Cambio del nombre del componente a AppAbout.vue
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
