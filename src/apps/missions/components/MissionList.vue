<template>
  <div>
    <ul>
      <li v-for="mission in missions" :key="mission.id">{{ mission.name }}</li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MissionList extends Vue {
  get missions() {
    return this.$store.state.missions;
  }
}
</script>

<style lang="scss" scoped></style>
