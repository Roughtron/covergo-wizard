<template>
  <x-wizard-page />
</template>

<script>
import '@/styles/index.styl'
import XWizardPage from './views/XWizardPage/XWizardPage.vue'

export default {
  components: {
    XWizardPage
  }
}
</script>

<style lang="stylus">
  #app
    height 100%
    padding 4rem 0
    background-color #f6f6f9
    box-sizing border-box
</style>
