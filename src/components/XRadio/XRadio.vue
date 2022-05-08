<template>
  <label class="x-radio">
    <input
      type="radio"
      v-bind="$attrs"
      :value="value"
      :checked="isChecked"
      @change="$emit('change', $event.target.value)"
    >
    <span class="x-radio__text">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: 'XRadio',
  inheritAttrs: false,
  props: {
    modelValue: {
      default: ''
    },
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    isChecked () {
      return this.modelValue === this.value
    }
  }
}
</script>

<style lang="stylus" scoped>
  .x-radio
    display flex
    align-items center
    cursor pointer

    &__text
      margin-left $space
</style>
