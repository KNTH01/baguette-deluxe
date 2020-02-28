import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/apps/missions/views/Main.vue';
import Detail from '@/apps/missions/views/Detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
