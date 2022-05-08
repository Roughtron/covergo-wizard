<template>
  <label
    :for="htmlFor"
    class="x-label"
  >
    <slot />
  </label>
</template>

<script>
export default {
  name: 'XLabel',
  props: {
    htmlFor: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
  .x-label
    display block
    font-family $font-family
    font-style normal
    font-weight normal
    margin-bottom $space
</style>
