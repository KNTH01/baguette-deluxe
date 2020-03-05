<template>
  <div>
    <ul>
      <router-link
        tag="li"
        data-test="link-mission"
        class="px-4 py-2 my-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
        v-for="mission in missions"
        :key="mission.id"
        :to="{ name: 'Detail', params: { id: mission.id } }"
      >
        {{ mission.name }}
        <span v-if="!mission.editable" class="ml-4 text-xs text-gray-400">
          Not editable
        </span>
      </router-link>
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
