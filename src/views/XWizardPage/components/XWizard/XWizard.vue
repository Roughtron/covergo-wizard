<template>
  <component
    :is="componentName"
    v-model="model"
    :fields="computedFields"
    @next="onNextClick"
    @back="onBackClick"
    @finish="onFinishClick"
  />
</template>

<script>
import XWelcome from '../XWelcome/XWelcome.vue'
import XCalculator from '../XCalculator/XCalculator.vue'
import XSummary from '../XSummary/XSummary.vue'
import XWizardError from '../XWizardError/XWizardError'

import fields from './fields'

import currencyDictionary from '@/shared/currency'
import countryRate from '@/shared/country-rate'
import premiumRate from '@/shared/premium-rate'

export default {
  name: 'XWizard',
  components: {
    XWelcome,
    XCalculator,
    XSummary,
    XWizardError
  },
  data () {
    return {
      model: {
        name: '',
        age: '',
        country: '',
        package: 'Standart',
        premium: ''
      },
      defaultModel: {},
      currentStep: 0
    }
  },
  computed: {
    componentName () {
      switch (this.currentStep) {
        case 1:
          return 'XCalculator'

        case 2:
          if (this.age > 100) {
            return 'XWizardError'
          }

          return 'XSummary'

        default:
          return 'XWelcome'
      }
    },
    age () {
      return this.model.age ?? 0
    },
    country () {
      return this.model.country
    },
    package () {
      return this.model.package
    },
    countryRate () {
      return countryRate[this.country] ?? 1
    },
    premiumRate () {
      return premiumRate[this.package]
    },
    standartTotal () {
      return this.age * this.countryRate * 10
    },
    total () {
      return this.standartTotal * this.premiumRate
    },
    currency () {
      if (this.country) {
        return currencyDictionary[this.country]
      }

      return ''
    },
    premium () {
      if (this.total && this.currency) {
        return `${this.total} ${this.currency}`
      }

      return ''
    },
    computedFields () {
      return {
        ...fields,
        package: {
          ...fields.package,
          fields: fields.package.fields.map(f => ({
            ...f,
            text: this.formatPackageText(f)
          }))
        }
      }
    }
  },
  watch: {
    premium () {
      this.updatePremium()
    }
  },
  created () {
    this.defaultModel = { ...this.model }
  },
  methods: {
    updatePremium () {
      this.model.premium = this.premium
    },
    onNextClick () {
      this.currentStep++
    },
    onBackClick () {
      this.currentStep--
    },
    onFinishClick () {
      this.currentStep = 0

      this.model = { ...this.defaultModel }
    },
    formatPackageText ({ text, value }) {
      const rate = premiumRate[value]

      if (rate === 1) return text

      if (!this.standartTotal || !this.currency) return text

      const additionalPrice = this.standartTotal * (rate - 1)
      const percent = (rate - 1) * 100

      return `${text} (+${additionalPrice} ${this.currency}, ${percent}%)`
    }
  }
}
</script>
