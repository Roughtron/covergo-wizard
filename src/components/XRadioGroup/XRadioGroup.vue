<template>
  <ul class="x-radio-group">
    <li
      v-for="field in field.fields"
      :key="field.id"
      class="x-radio-group__item"
    >
      <x-radio
        v-model="selfValue"
        :value="field.value"
        :name="name"
        @change="onChange"
      >
        {{ field.text }}
      </x-radio>
    </li>
  </ul>
</template>

<script>
import XRadio from '../XRadio/XRadio.vue'

export default {
  name: 'XRadioGroup',
  components: {
    XRadio
  },
  props: {
    field: {
      type: Object,
      default: () => ({}),
      required: true
    },
    modelValue: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: 'radiogroup'
    }
  },
  data () {
    return {
      selfValue: this.modelValue
    }
  },
  watch: {
    modelValue () {
      this.selfValue = this.modelValue
    }
  },
  methods: {
    onChange (value) {
      this.$emit('update:model-value', value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .x-radio-group
    margin 0
    padding 0
    list-style none

    &__item
      margin-bottom $space * 3
</style>
