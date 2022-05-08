import { defineRule } from 'vee-validate'
import { required, min_value as minValue } from '@vee-validate/rules'

defineRule('required', required)
defineRule('min_value', minValue)
