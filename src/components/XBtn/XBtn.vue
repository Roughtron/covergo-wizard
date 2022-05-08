<template>
  <button
    :class="computedClasses"
    v-bind="$attrs"
  >
    <span class="x-btn__content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'XBtn',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'gray'].includes(v)
    }
  },
  computed: {
    computedClasses () {
      return [
        'x-btn',
        'x-btn--' + this.color
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  border-width = 1px

  .x-btn
    display inline-flex
    flex-shrink 0
    flex-grow 0
    align-items center
    justify-content center
    margin 0
    padding 0
    font-family $font-family
    font-size: $font-size-m
    font-weight: $font-weights.semibold
    color transparent
    line-height 17px
    vertical-align middle
    text-transform none
    letter-spacing normal
    font-stretch normal
    white-space nowrap
    text-decoration none
    background none
    border none
    border-radius $radius
    outline none
    cursor pointer
    box-sizing border-box
    user-select none
    -webkit-tap-highlight-color transparent

    &__content
      display flex
      justify-content center
      align-items center
      height 32px
      padding 0 ($space * 5) - border-width
      border-width border-width
      border-color transparent
      border-style solid
      border-radius inherit
      transition background-color .2s, border-color .2s, color .1s

    & + &
      margin-left $space * 5

    &--primary
      .x-btn__content
        color #fff
        background-color: $colors.primary

      &:hover
        .x-btn__content
          background-color: $colors.primary-dark

      &:active
        .x-btn__content
          background-color: $colors.primary-darker

      &:disabled
        .x-btn__content
          background-color: $colors.primary-light

    &--gray
      .x-btn__content
        color: $colors.gray-darkest-2
        background-color: $colors.gray-lighter

      &:hover
        .x-btn__content
          background-color: $colors.gray-light

      &:active
        .x-btn__content
          background-color: $colors.primary-lightest-1

      &:disabled
        .x-btn__content
          background-color: $colors.gray-lightest-1
</style>
