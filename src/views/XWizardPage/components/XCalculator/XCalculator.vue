<template>
  <x-form @submit="onSubmit">
    <x-heading class="mb-4 text-center">
      Tell us about yourself
    </x-heading>

    <x-form-field
      v-for="field in fields"
      :key="field.name"
      :field="field"
      class="mb-4"
    >
      <component
        :is="getComponent(field.component)"
        v-model="model[field.name]"
        :field="field"
      />
    </x-form-field>

    <x-heading
      v-if="model.premium"
      level="4"
      class="text-center"
    >
      Your premium is: {{ model.premium }}
    </x-heading>

    <div class="mt-6 text-center">
      <x-btn
        color="gray"
        type="button"
        @click="$emit('back')"
      >
        Back
      </x-btn>
      <x-btn>
        Next
      </x-btn>
    </div>
  </x-form>
</template>

<script>
import { Form as XForm } from 'vee-validate'
import XHeading from '@/components/XHeading/XHeading.vue'
import XFormField from '@/components/XFormField/XFormField.vue'
import XInput from '@/components/XInput/XInput.vue'
import XSelect from '@/components/XSelect/XSelect.vue'
import XRadioGroup from '@/components/XRadioGroup/XRadioGroup.vue'
import XBtn from '@/components/XBtn/XBtn.vue'

import { getComponent } from '@/shared/controls'

export default {
  name: 'XCalculator',
  components: {
    XForm,
    XHeading,
    XFormField,
    XInput,
    XSelect,
    XRadioGroup,
    XBtn
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    fields: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      model: this.modelValue
    }
  },
  watch: {
    modelValue: {
      deep: true,
      handler (value) {
        this.model = value
      }
    }
  },
  methods: {
    getComponent,
    onSubmit () {
      this.$emit('next')
    }
  }
}
</script>
