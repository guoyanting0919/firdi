import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import AboutFounder from '../views/AboutFounder.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: 'AboutFounder',
        name: 'AboutFounder',
        component: AboutFounder,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
