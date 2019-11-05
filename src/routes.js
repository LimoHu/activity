export default {
  routes: [{
      path: '/',
      redirect: 'home',
      
    }, {
      path: '/home',
      component: () => import('./pages/home/index.vue'),
      meta: {
        index: 1
      }
    }, {
      path: '/test',
      component: () => import('./pages/test/index.vue'),
      meta: {
        index: 10
      }
    }, {
      path: '/tiger',
      component: () => import('./pages/activity/tiger.vue'),
      meta: {
        index: 10
      }
    }, {
      path: '/egg',
      component: () => import('./pages/activity/tiger.vue'),
      meta: {
        index: 10
      }
    }
  ]
}
