<template>
  <div>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  created(): void {
    console.log(process.env.VUE_APP_HELLO_DEV);
  }
}
</script>

<style lang="scss" scoped></style>
