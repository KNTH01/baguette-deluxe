import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { client } from './api';

export default new Vuex.Store({
  state: {
    profile: {
      id: null,
      name: '',
    },
  },

  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
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
    fetchMissions() {},
    fetchMissionId() {},
  },
});
