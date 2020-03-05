<template>
  <div>
    <div v-if="mission">
      <h1 data-test="mission-title" class="my-4 text-xl">
        Mission: <span class="underline">{{ mission.name }}</span>
      </h1>
      <EditMission :mission="mission"></EditMission>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IfcMission } from '@/store/ifc';
import EditMission from '@/apps/missions/components/EditMission.vue';

@Component({
  components: {
    EditMission,
  },
})
export default class Detail extends Vue {
  get mission(): IfcMission | null {
    return this.$store.state.missions.find((mission: IfcMission) => {
      return mission.id.toString() === this.$route.params.id.toString();
    });
  }
}
</script>

<style lang="scss" scoped></style>
