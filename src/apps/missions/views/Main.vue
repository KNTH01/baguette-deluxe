<template>
  <div>
    <MissionList></MissionList>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import MissionList from '@/apps/missions/components/MissionList';

@Component({
  components: { MissionList },
})
export default class Main extends Vue {
  created() {
    this.$store.dispatch('fetchMissions');
  }
}
</script>

<style lang="scss" scoped></style>
