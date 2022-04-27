import { createRouter, createWebHistory } from 'vue-router';
import routesRecords from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: routesRecords,
});

// router.beforeEach((to, from, next) => {});
// router.afterEach(async (to) => {});

export default router;
