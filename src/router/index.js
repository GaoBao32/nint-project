import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [

  // 重定向
  {
    path: '/',
    redirect: '/home/index'
  },
  // 嵌套路由
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: '/home/index',
        component: () => import('../views/index.vue'),
        meta: {
          keepAlive:true
        }
      },{
        path: 'me',
        name: '/homoe/me',
        component: () => import('../views/me.vue'),
      }
    ],
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import('../testing/Nav.vue'),
  },
  // 测试页面
  {
    path: '/field',
    name: 'field',
    component: () => import('../testing/Field.vue'),
  },
  // 注册页面
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/',
    name: 'HomeViews',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
