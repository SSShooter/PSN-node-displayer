import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/userPage',
    meta: {
      from: ['/friends', '/search'],
    },
    component: () => import('@/pages/GameList.vue'),
  },
  {
    path: '/gameTrophy',
    meta: {
      from: ['/userPage'],
    },
    component: () => import('@/pages/GameTrophy.vue'),
  },
  {
    path: '/friends',
    meta: {
      from: [],
    },
    component: () => import('@/pages/UserList.vue'),
  },
  {
    path: '/search',
    meta: {
      from: [],
    },
    component: () => import('@/pages/SearchUser.vue'),
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
