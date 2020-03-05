<template>
  <div>
    <input
      data-test="input-mission"
      class="block w-full px-4 py-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
      type="text"
      v-model="inputTextModel"
    />
  </div>
</template>

<script lang="ts">
import { Watch, Component, Vue } from 'vue-property-decorator';

// Define the props by using Vue's canonical way.
const EditMissionProps = Vue.extend({
  props: {
    inputText: {
      type: String,
      required: true,
    },
  },
});

@Component
export default class EditMission extends EditMissionProps {
  inputTextModel = '';

  get isValid(): boolean {
    return this.inputTextModel.trim().length > 8;
  }

  @Watch('inputTextModel')
  onInputTextModelChanged(value: string): void {
    this.$emit('update:inputText', value);
  }

  @Watch('isValid')
  onValidChange(value: string): void {
    this.$emit('update:isValid', value);
  }
}
</script>

<style lang="scss" scoped></style>
