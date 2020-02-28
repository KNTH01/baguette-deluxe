<template>
  <nav>
    Logo
    <router-link :to="{ name: 'Main' }">Main</router-link>
    <router-link :to="{ name: 'Settings' }">Settings</router-link>
    {{ name | displayName }}
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    displayName(value: string): string {
      if (value.trim()) {
        const [firstName, lastName] = value.split(' ');
        return `${firstName.charAt(0)}. ${lastName}`;
      }

      return '';
    },
  },
})
export default class TheNavbar extends Vue {
  get name(): string {
    return this.$store.state.profile.name;
  }
}
</script>

<style lang="scss" scoped></style>
