import Vue from 'vue';
import Vuex from 'vuex';
import { IfcPerson, IfcMission } from './ifc';

Vue.use(Vuex);

import { client } from './api';

export default new Vuex.Store({
  getters: {
    missionCount: (state: any) => state.missions.length,
  },

  mutations: {
    setProfile(state: any, profile: IfcPerson): void {
      state.profile = profile;
    },

    setMissions(state: any, missions: []): void {
      state.missions = missions;
    },

    editMission(state: any, updatedMission: IfcMission): void {
      const index: number = state.missions.findIndex(
        (mission: IfcMission) => mission.id === updatedMission.id
      );

      if (index > -1) {
        state.missions.splice(index, 1, updatedMission);
      }
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

    async editMission({ commit }, payload): Promise<void> {
      try {
        const result = await client.put(`missions/${payload.id}`, {
          name: payload.name,
          editable: true,
        });

        const mission = result.data;

        commit('editMission', mission);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
