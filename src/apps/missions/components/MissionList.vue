<template>
  <div>
    <ul>
      <li v-for="mission in missions" :key="mission.id">
        <router-link :to="{ name: 'Detail', params: { id: mission.id } }">
          {{ mission.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MissionList extends Vue {
  get missions(): [] {
    return this.$store.state.missions;
  }
}
</script>

<style lang="scss" scoped></style>
