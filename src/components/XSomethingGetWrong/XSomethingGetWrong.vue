<template>
  <div>
    <x-heading class="mb-4 text-center">Ooops</x-heading>
    <div class="mb-6 text-center">
      <slot>Something get wrong</slot>
    </div>
    <div class="text-center">
      <x-btn @click="$emit('confirm')">
        Ok :(
      </x-btn>
    </div>
  </div>
</template>

<script>
import XHeading from '@/components/XHeading/XHeading.vue'
import XBtn from '@/components/XBtn/XBtn.vue'

export default {
  name: 'XSomethingGetWrong',
  components: {
    XHeading,
    XBtn
  }
}
</script>
