<template>
  <div>
    <h1>Detail</h1>
    {{ $route.params.id }}
    <div v-if="mission">{{ mission.id }}{{ mission.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IfcMission } from '@/store/ifc';

@Component({})
export default class Detail extends Vue {
  get mission(): IfcMission | null {
    return this.$store.state.missions.find((mission: IfcMission) => {
      return mission.id.toString() === this.$route.params.id.toString();
    });
  }
}
</script>

<style lang="scss" scoped></style>
