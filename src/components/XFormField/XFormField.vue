<template>
  <div class="x-form-field">
    <x-label v-if="field.label">
      {{ field.label }}
    </x-label>
    <slot />
    <x-error-message
      :name="field.name"
      class="x-form-field__error"
    />
  </div>
</template>

<script>
import XLabel from '@/components/XLabel/XLabel.vue'
import { ErrorMessage as XErrorMessage } from 'vee-validate'

export default {
  name: 'XFormField',
  components: {
    XLabel,
    XErrorMessage
  },
  props: {
    field: {
      type: Object,
      default: () => ({}),
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .x-form-field
    &__error
      font-size $font-sizes.caption
      color $colors.red
</style>
