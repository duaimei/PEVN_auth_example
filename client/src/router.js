import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Secured from './views/Secured.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secured,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requiresAuth && !loggedIn)) {
    next('/');
  }
  next();
});
export default router;
