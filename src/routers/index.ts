import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import UserLogin from '../views/Login.vue';
import UserRegister from '../views/Register.vue';
// import UserHome from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login', 
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: UserHome, 
  // },
  {
    path: '/login',
    name: 'Login',
    component: UserLogin,
  },
  {
    path: '/register',
    name: 'Register',
    component: UserRegister,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
