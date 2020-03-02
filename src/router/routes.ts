import Main from '@/apps/missions/views/Main.vue';
import Detail from '@/apps/missions/views/Detail.vue';
import Settings from '@/apps/missions/views/Settings.vue';

import store from '@/store';
import { IfcMission } from '@/store/ifc';

export default [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    beforeEnter: (to: any, from: any, next: any) => {
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
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
];
