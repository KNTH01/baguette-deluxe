<template>
  <div>
    <form @submit.prevent="editMission">
      <p>
        <input
          class="block w-full px-4 py-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          v-model="missionName"
        />
      </p>
      <p>
        <button
          class="px-4 py-2 my-4 font-bold text-white rounded bg-primary hover:opacity-75"
          type="submit"
        >
          Edit mission
        </button>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Define the props by using Vue's canonical way.
const EditMissionProps = Vue.extend({
  props: {
    mission: {
      type: Object,
      required: true,
    },
  },
});

@Component
export default class EditMission extends EditMissionProps {
  missionName = '';

  async editMission(): Promise<void> {
    if (this.mission.editable && this.missionName.trim()) {
      try {
        await this.$store.dispatch('editMission', {
          id: Number(this.$route.params.id),
          name: this.missionName,
        });
        this.missionName = '';
      } catch (error) {
        console.error(error);
      }
    }

    this.$router.push({ name: 'Main' });
  }
}
</script>

<style lang="scss" scoped></style>
