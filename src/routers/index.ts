import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'UserLoginPage',
    component: () => import('../pages/UserLoginPage.vue'),
  },
  {
    path: '/register',
    name: 'UserRegisterPage',
    component: () => import('../pages/UserRegisterPage.vue'),
  },
  {
    path: '/home',
    redirect: '/home.html' // Redirige a home.html en la carpeta public
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
