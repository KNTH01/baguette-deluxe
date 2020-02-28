import Vue from 'vue';
import Vuex from 'vuex';
import { IfcPerson } from './ifc';

Vue.use(Vuex);

import { client } from './api';

export default new Vuex.Store({
  state: {
    profile: {},
    missions: [],
  },

  getters: {
    missionCount: state => state.missions.length,
  },

  mutations: {
    setProfile(state, profile: IfcPerson): void {
      state.profile = profile;
    },

    setMissions(state, missions: []): void {
      state.missions = missions;
    },
  },

  actions: {
    async fetchProfile({ commit }): Promise<void> {
      try {
        const result = await client.get('profile');
        const profile = result.data;

        if (profile.id && profile.name.trim()) {
          commit('setProfile', profile);
        } else {
          throw new Error('Unknown profile');
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchMissions({ commit }): Promise<void> {
      try {
        const result = await client.get('missions');
        const missions = result.data;

        if (missions.length > 0) {
          commit('setMissions', missions);
        }
      } catch (error) {
        console.error(error);
      }
    },

    // fetchMissionId() {},
  },
});
