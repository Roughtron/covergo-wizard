<template>
  <div class="x-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'XCard'
}
</script>

<style lang="stylus" scoped>
  .x-card
    padding 5 * $space
    background-color #fff
    border-radius $radius
    box-shadow: $box-shadows.card
</style>
