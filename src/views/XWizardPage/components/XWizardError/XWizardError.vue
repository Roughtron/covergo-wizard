<template>
  <x-something-get-wrong @confirm="$emit('finish')">
    Your age is over our accepted limit.<br>
    We are sorry but we cannot insure you now
  </x-something-get-wrong>
</template>

<script>
import XSomethingGetWrong from '@/components/XSomethingGetWrong/XSomethingGetWrong.vue'

export default {
  name: 'XWizardError',
  components: {
    XSomethingGetWrong
  }
}
</script>
