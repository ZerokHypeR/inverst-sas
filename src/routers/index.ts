import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

// Definir las rutas de la aplicación
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'UserLogin',
    component: () => import('../pages/login.vue'), 
  },

  {
    path: '/Register',
    name:'UserRegister',
    component: () => import('../pages/UserRegister.vue')
  },
  {
    path: '/Carts',
    name: 'ChartsComponent',
    component: () => import('../components/ChartsComponent.vue'), 
  },
  {
    path: '/Notification',
    name: 'NotificationsComponent',
    component: () => import('../components/NotificationsComponent.vue'), 
  },
  {
    path: '/home/new',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue'), 
  },
  {
    path: '/Dashboard',
    name: 'DashboardPage',
    component: () => import('../views/DashboardPage.vue'), 
  },
];

// Crear y configurar el enrutador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Exportar el enrutador para su uso en la aplicación
export default router;
