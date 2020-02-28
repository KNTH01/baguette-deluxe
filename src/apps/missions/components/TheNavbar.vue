<template>
  <nav class="bg-gray-800">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0">
            <img
              class="w-auto h-8 mt-1"
              src="/assets/logo.png"
              alt="Ce Ene I"
            />
          </div>
          <div class="flex">
            <router-link
              class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              :to="{ name: 'Main' }"
            >
              Main
            </router-link>

            <router-link
              class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              :to="{ name: 'Settings' }"
            >
              Settings
            </router-link>
          </div>
          <div class="flex-grow">
            <p class="px-3 py-2 text-right text-white">
              {{ name | displayName }}
            </p>
          </div>
        </div>
      </div>
    </div>
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

<style lang="css" scoped>
.router-link-exact-active {
  @apply bg-gray-900 rounded-md;
}
</style>
