<template>
  <div>
    <div v-if="!isLoading">
      <TheNavbar></TheNavbar>
      <router-view class="container px-2 mx-auto"></router-view>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import TheNavbar from '@/apps/missions/components/TheNavbar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TheNavbar,
  },
})
export default class App extends Vue {
  isLoading = true;

  async created(): Promise<void> {
    await Promise.all([
      this.$store.dispatch('fetchProfile'),
      this.$store.dispatch('fetchMissions'),
    ]);
    this.isLoading = false;
  }
}
</script>

<style lang="css" scoped>
@import './assets/tailwind.css';
</style>
