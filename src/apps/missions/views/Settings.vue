<template>
  <div>
    <h1>Settings</h1>
    {{ profile.id }}
    {{ profile.name }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IfcPerson } from '@/store/ifc';
import EditMission from '@/apps/missions/components/EditMission.vue';

@Component({
  components: {
    EditMission,
  },
})
export default class Settings extends Vue {
  get profile(): IfcPerson | null {
    return this.$store.state.profile;
  }
}
</script>

<style lang="scss" scoped></style>
