<template>
  <div>
    <p class="mt-8 mb-4 text-right">
      <span class="px-3 py-1 text-sm text-white rounded-full bg-primary">
        {{ missionCount }}
      </span>
    </p>
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
