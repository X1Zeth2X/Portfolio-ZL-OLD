import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      // Lazy load to reduce load times
      component: () => import('@/views/Projects.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // Lazy load to reduce load times
      component: () => import('@/views/About.vue'),
    },
  ],
});
