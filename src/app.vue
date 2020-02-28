<template>
  <div>
    <TheNavbar></TheNavbar>
    <router-view></router-view>
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
  created(): void {
    console.log(process.env.VUE_APP_HELLO_DEV);
    this.$store.dispatch('fetchProfile');
  }
}
</script>

<style lang="scss" scoped></style>
