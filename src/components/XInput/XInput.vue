<template>
  <x-field
    v-bind="fieldProps"
    :value="value"
    class="x-input"
  />
</template>

<script>
import { Field as XField } from 'vee-validate'

export default {
  name: 'XInput',
  components: {
    XField
  },
  props: {
    field: {
      type: Object,
      default: () => ({}),
      required: true
    },
    value: {
      type: String
    }
  },
  computed: {
    type () {
      return this.field.type || 'text'
    },
    fieldProps () {
      const { name, rules } = this.field

      return {
        name,
        rules,
        type: this.type
      }
    },
    modelValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .x-input
    width 100%
    height 32px
    padding 0 5px
    box-sizing border-box
</style>
