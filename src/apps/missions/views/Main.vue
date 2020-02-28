<template>
  <div>
    <span>
      {{ missionCount }}
    </span>
    <MissionList></MissionList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MissionList from '@/apps/missions/components/MissionList.vue';

@Component({
  components: { MissionList },
})
export default class Main extends Vue {
  get missionCount(): number {
    return this.$store.getters.missionCount;
  }
}
</script>

<style lang="scss" scoped></style>
