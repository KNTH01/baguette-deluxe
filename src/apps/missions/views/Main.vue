<template>
  <div>
    <div v-if="!isLoading">
      <span>
        {{ missionCount }}
      </span>
      <MissionList></MissionList>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import MissionList from '@/apps/missions/components/MissionList';

@Component({
  components: { MissionList },
})
export default class Main extends Vue {
  isLoading = true;

  get missionCount() {
    return this.$store.getters.missionCount;
  }

  async created() {
    await this.$store.dispatch('fetchMissions');
    this.isLoading = false;
  }
}
</script>

<style lang="scss" scoped></style>
