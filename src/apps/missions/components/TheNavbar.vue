<template>
  <nav>
    <router-link :to="{ name: 'Main' }">Logo</router-link>
    <router-link :to="{ name: 'Main' }">Main</router-link>
    <router-link :to="{ name: 'Main' }">Settings</router-link>
    <router-link v-if="name" :to="{ name: 'Main' }">
      {{ name | displayName }}
    </router-link>
  </nav>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    displayName(value) {
      if (value.trim()) {
        const [firstName, lastName] = value.split(' ');
        return `${firstName.charAt(0)}. ${lastName}`;
      }

      return '';
    },
  },
})
export default class TheNavbar extends Vue {
  get name() {
    return this.$store.state.profile.name;
  }
}
</script>

<style lang="scss" scoped></style>
