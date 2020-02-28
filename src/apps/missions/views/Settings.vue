<template>
  <div>
    <h1 class="my-4 text-xl">Settings</h1>

    <p>
      Yo soy
      <span class="text-lg font-semibold">
        {{ profile.name }}
      </span>
    </p>
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
