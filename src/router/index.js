// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import App from '../App.vue';
import About from '../About.vue';

const routes = [
  { path: '/', component: App },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
