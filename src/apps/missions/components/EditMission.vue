<template>
  <div>
    <form @submit.prevent="editMission">
      <p>
        <input type="text" v-model="missionName" />
      </p>
      <p>
        <button type="submit">Edit mission</button>
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
