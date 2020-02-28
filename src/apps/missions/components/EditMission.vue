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
import { IfcMission } from '@/store/ifc';

@Component({
  props: {
    mission: {
      type: Object,
      required: true,
    },
  },
})
export default class EditMission extends Vue {
  missionName = '';

  async editMission(): Promise<void> {
    console.log(this.missionName);
    this.missionName = '';
  }
}
</script>

<style lang="scss" scoped></style>
