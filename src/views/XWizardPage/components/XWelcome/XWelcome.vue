<template>
  <div class="x-welcome text-center">
    <x-heading class="mb-4">
      Hello There!
    </x-heading>
    <p class="mb-6">
      Let's by some insurance. It is going to take only a few steps
    </p>
    <x-btn
      type="button"
      @click="$emit('next')"
    >
      Start
    </x-btn>
  </div>
</template>

<script>
import XHeading from '@/components/XHeading/XHeading.vue'
import XBtn from '@/components/XBtn/XBtn.vue'

export default {
  name: 'XWelcome',
  components: {
    XHeading,
    XBtn
  }
}
</script>
