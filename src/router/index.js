import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginView.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard }
];

export default createRouter({
  history: createWebHistory(),
  routes
});