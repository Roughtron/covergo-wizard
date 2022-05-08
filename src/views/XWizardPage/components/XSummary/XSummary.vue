<template>
  <div class="x-summary">
    <x-heading class="mb-4 text-center">
      Summary
    </x-heading>
    <strong class="x-summary__name">{{ name }},</strong>
    <ul class="x-summary__list">
      <li
        v-for="(field, key) in fields"
        :key="field"
        class="mb-2"
      >
        {{ field }}: {{ modelValue[key] }}
      </li>
    </ul>
    <div class="mt-6 text-center">
      <x-btn
        type="button"
        color="gray"
        @click="$emit('back')"
      >
        Back
      </x-btn>
      <x-btn
        type="button"
        @click="$emit('finish')"
      >
        Buy
      </x-btn>
    </div>
  </div>
</template>

<script>
import XHeading from '@/components/XHeading/XHeading.vue'
import XBtn from '@/components/XBtn/XBtn.vue'

import fields from './fields'

export default {
  name: 'XSummary',
  components: {
    XHeading,
    XBtn
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data () {
    return {
      fields
    }
  },
  computed: {
    name () {
      return this.modelValue.name || ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .x-summary
    &__list
      margin-bottom 5 * $space
      list-style none

    &__name
      display block
      margin-bottom 5 * $space
      text-align center
</style>
