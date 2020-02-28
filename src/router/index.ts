import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/apps/missions/views/Main.vue';
import Detail from '@/apps/missions/views/Detail.vue';

import store from '@/store';
import { IfcMission } from '@/store/ifc';

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
    beforeEnter: (to, from, next) => {
      if (to.params && Number(to.params.id)) {
        const index = store.state.missions.findIndex(
          (mission: IfcMission) =>
            mission?.id?.toString() === to.params.id.toString()
        );

        if (index > -1) {
          return next();
        }
      }

      return next({ name: 'Main' });
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
