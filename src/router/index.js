import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// About
import About from '../views/About/About.vue';
import AboutFounder from '../views/About/AboutFounder.vue';
import AboutAchievement from '../views/About/AboutAchievement.vue';
import AboutChairman from '../views/About/AboutChairman.vue';
import AboutFinancial from '../views/About/AboutFinancial.vue';
import AboutFloor from '../views/About/AboutFloor.vue';
import AboutHistory from '../views/About/AboutHistory.vue';
import AboutOrganization from '../views/About/AboutOrganization.vue';
import AboutOrganizationImg from '../views/About/AboutOrganizationImg.vue';
import AboutPosition from '../views/About/AboutPosition.vue';
import AboutPurpose from '../views/About/AboutPurpose.vue';
import AboutWorkReport from '../views/About/AboutWorkReport.vue';
// News
import News from '../views/News/News.vue';
import NewsActivity from '../views/News/NewsActivity.vue';
import NewsTraining from '../views/News/NewsTraining.vue';
import NewsElse from '../views/News/NewsElse.vue';
import NewsActivityId from '../views/News/NewsActivityId.vue';
import NewsTrainingId from '../views/News/NewsTrainingId.vue';
import NewsElseId from '../views/News/NewsElseId.vue';
import NewsActivityHome from '../views/News/NewsActivityHome.vue';
import NewsElseHome from '../views/News/NewsElseHome.vue';
import NewsTrainingHome from '../views/News/NewsTrainingHome.vue';
// iframe
import Iframe from '../views/Iframe.vue';
// serve
import Serve from '../views/Serve/Serve.vue';
import ServeCan from '../views/Serve/ServeCan.vue';
import ServeDelegate from '../views/Serve/ServeDelegate.vue';
import ServeLaboratory from '../views/Serve/ServeLaboratory.vue';
import ServeManual from '../views/Serve/ServeManual.vue';
import ServePatent from '../views/Serve/ServePatent.vue';
import ServePoison from '../views/Serve/ServePoison.vue';
import ServePublishing from '../views/Serve/ServePublishing.vue';
import ServeQuality from '../views/Serve/ServeQuality.vue';
import ServeVerification from '../views/Serve/ServeVerification.vue';

// purchase
import Purchase from '../views/Purchase/Purchase.vue';
import PurchaseHome from '../views/Purchase/PurchaseHome.vue';
import PurchaseAnnounce from '../views/Purchase/PurchaseAnnounce.vue';

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
        path: 'ServeCan',
        name: 'ServeCan',
        component: ServeCan
      },
      {
        path: 'ServeDelegate',
        name: 'ServeDelegate',
        component: ServeDelegate
      },
      {
        path: 'ServeLaboratory',
        name: 'ServeLaboratory',
        component: ServeLaboratory
      },
      {
        path: 'ServeManual',
        name: 'ServeManual',
        component: ServeManual
      },
      {
        path: 'ServePatent',
        name: 'ServePatent',
        component: ServePatent
      },
      {
        path: 'ServePoison',
        name: 'ServePoison',
        component: ServePoison
      },
      {
        path: 'ServePublishing',
        name: 'ServePublishing',
        component: ServePublishing
      },
      {
        path: 'ServeQuality',
        name: 'ServeQuality',
        component: ServeQuality
      },
      {
        path: 'ServeVerification',
        name: 'ServeVerification',
        component: ServeVerification
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
      },
      {
        path: 'AboutAchievement',
        name: 'AboutAchievement',
        component: AboutAchievement
      },
      {
        path: 'AboutChairman',
        name: 'AboutChairman',
        component: AboutChairman
      },
      {
        path: 'AboutFinancial',
        name: 'AboutFinancial',
        component: AboutFinancial
      },
      {
        path: 'AboutFloor',
        name: 'AboutFloor',
        component: AboutFloor
      },
      {
        path: 'AboutHistory',
        name: 'AboutHistory',
        component: AboutHistory
      },
      {
        path: 'AboutOrganization',
        name: 'AboutOrganization',
        component: AboutOrganization
      },
      {
        path: 'AboutOrganizationImg',
        name: 'AboutOrganizationImg',
        component: AboutOrganizationImg
      },
      {
        path: 'AboutPosition',
        name: 'AboutPosition',
        component: AboutPosition
      },
      {
        path: 'AboutPurpose',
        name: 'AboutPurpose',
        component: AboutPurpose
      },
      {
        path: 'AboutWorkReport',
        name: 'AboutWorkReport',
        component: AboutWorkReport
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
        component: NewsActivity,
        children: [
          {
            path: '',
            name: 'NewsActivityHome',
            component: NewsActivityHome
          },
          {
            path: ':NewsActivityId',
            name: 'NewsActivityId',
            component: NewsActivityId
          }
        ]
      },
      {
        path: 'NewsTraining',
        name: 'NewsTraining',
        component: NewsTraining,
        children: [
          {
            path: '',
            name: 'NewsTrainingHome',
            component: NewsTrainingHome
          },
          {
            path: ':NewsTrainingId',
            name: 'NewsTrainingId',
            component: NewsTrainingId
          }
        ]
      },
      {
        path: 'NewsElse',
        name: 'NewsElse',
        component: NewsElse,
        children: [
          {
            path: '',
            name: 'NewsElseHome',
            component: NewsElseHome
          },
          {
            path: ':NewsElseId',
            name: 'NewsElseId',
            component: NewsElseId
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
