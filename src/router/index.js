import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// About
import About from '../views/About.vue';
import AboutFounder from '../views/AboutFounder.vue';
// News
import News from '../views/News.vue';
import NewsActivity from '../views/NewsActivity.vue';
import NewsActivityId from '../views/NewsActivityId.vue';

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
  {
    path: '/news',
    name: 'News',
    component: News,
    children: [
      {
        path: 'NewsActivity',
        name: 'NewsActivity',
        component: NewsActivity,
      },
      {
        path: ':NewsActivityId',
        name: 'NewsActivityId',
        component: NewsActivityId,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
