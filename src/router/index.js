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
// iframe
import Iframe from '../views/Iframe.vue';
// serve
import Serve from '../views/Serve.vue';
import ServeCan from '../views/ServeCan.vue';

// purchase
import Purchase from '../views/Purchase.vue';
import PurchaseHome from '../views/PurchaseHome.vue';
import PurchaseAnnounce from '../views/PurchaseAnnounce.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/iframe',
    name: 'Iframe',
    component: Iframe
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: Purchase,
    children: [
      {
        path: '',
        name: 'PurchaseHome',
        component: PurchaseHome
      },
      {
        path: 'purchaseAnnounce',
        name: 'PurchaseAnnounce',
        component: PurchaseAnnounce
      }
    ]
  },
  {
    path: '/serve',
    name: 'Serve',
    component: Serve,
    children: [
      {
        path: '',
        name: 'ServeCan',
        component: ServeCan
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: 'AboutFounder',
        name: 'AboutFounder',
        component: AboutFounder
      }
    ]
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    children: [
      {
        path: 'NewsActivity',
        name: 'NewsActivity',
        component: NewsActivity
      },
      {
        path: ':NewsActivityId',
        name: 'NewsActivityId',
        component: NewsActivityId
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
