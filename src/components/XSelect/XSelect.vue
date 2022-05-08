<template>
  <x-field
    v-bind="fieldProps"
    as="select"
    class="x-select"
  >
    <option
      v-for="option in field.options"
      :key="option.value"
      :value="option.value"
      :disabled="option.disabled"
    >
      {{ option.text }}
    </option>
  </x-field>
</template>

<script>
import { Field as XField } from 'vee-validate'

export default {
  name: 'XSelect',
  components: {
    XField
  },
  props: {
    field: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    fieldProps () {
      const { name, rules } = this.field

      return {
        name,
        rules
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .x-select
    width 100%
    height 32px
    padding 0 5px
    box-sizing border-box
</style>
