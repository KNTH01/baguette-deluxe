import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { client } from './api';

interface Person {
  id: number;
  name: string;
}

interface Mission {
  id: number;
  name: string;
  editable: boolean;
}

interface Missions extends Array<Mission> {}

const emptyMissions: Missions = [];

export default new Vuex.Store({
  state: {
    profile: {},
    missions: emptyMissions,
  },

  getters: {
    missionCount: state => state.missions.length,
  },

  mutations: {
    setProfile(state, profile: Person) {
      state.profile = profile;
    },

    setMissions(state, missions: Missions) {
      state.missions = missions;
    },
  },

  actions: {
    async fetchProfile({ commit }) {
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

    async fetchMissions({ commit }) {
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

    fetchMissionId() {},
  },
});
