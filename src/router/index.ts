import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/apps/missions/views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
];

console.log('process.env.BASE_URL :', process.env.BASE_URL);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
