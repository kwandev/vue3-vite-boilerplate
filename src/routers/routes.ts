import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/pages/sample/Index.vue'),
  },
  // {
  //   path: '/error',
  //   component: () => import('@/pages/layouts/Layout.vue'),
  //   redirect: { name: 'NotFound' },
  //   children: [
  //     {
  //       path: '404',
  //       component: () => import('@/pages/notFound/Index.vue'),
  //       name: 'NotFound',
  //     },
  //   ],
  // },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'NotFound' },
  },
];

export default routes;
