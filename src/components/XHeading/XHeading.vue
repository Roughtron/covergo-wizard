<template>
  <component
    :is="tag"
    :class="computedClasses"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'XHeading',
  props: {
    level: {
      type: String,
      default: '1',
      validator: (value) => parseInt(value) >= 1 && parseInt(value) <= 6
    }
  },
  computed: {
    tag () {
      return `h${this.level}`
    },
    computedClasses () {
      return [
        'x-heading',
        `x-heading--level-${this.level}`
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .x-heading
    margin 0
    padding 0
    font-family $font-family
    font-weight: $font-weights.bold
    line-height 1.13

    for key in 1..6
      $level = 'headline-' + key

      &--level-{key}
        font-size: $font-sizes[$level]
</style>
