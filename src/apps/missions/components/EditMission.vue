<template>
  <div>
    <form @submit.prevent="editMission">
      <p>
        <EditMissionInput
          :input-text.sync="missionName"
          :is-valid.sync="isValid"
        ></EditMissionInput>
      </p>
      <p>
        <button
          :disabled="!isValid"
          :class="{
            'opacity-50 cursor-not-allowed': !isValid,
          }"
          class="px-4 py-2 my-4 font-bold text-white rounded bg-primary hover:shadow-md"
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
import EditMissionInput from './EditMissionInput.vue';

const EditMissionProps = Vue.extend({
  components: {
    EditMissionInput,
  },
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
  isValid = false;

  async editMission(): Promise<void> {
    if (this.mission.editable && this.isValid) {
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
