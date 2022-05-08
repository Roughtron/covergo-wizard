<template>
  <div class="x-wizard-page">
    <x-card class="x-wizard-page__in">
      <x-wizard />
    </x-card>
  </div>
</template>

<script>
import XCard from '@/components/XCard/XCard.vue'
import XWizard from './components/XWizard/XWizard.vue'

export default {
  name: 'XWizardPage',
  components: {
    XCard,
    XWizard
  }
}
</script>

<style lang="stylus" scoped>
  .x-wizard-page
    display flex
    justify-content center
    align-items center
    height 100%
    box-sizing border-box

    &__in
      width 100%
      max-width 500px
      max-height 100%
      overflow-y auto
</style>
