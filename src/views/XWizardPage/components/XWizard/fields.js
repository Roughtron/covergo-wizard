import { controlsTypes } from '@/shared/controls'

export default {
  name: {
    name: 'name',
    component: controlsTypes.TEXT,
    label: 'Name',
    rules: 'required'
  },
  age: {
    name: 'age',
    component: 'text',
    label: 'Age',
    rules: 'required|min_value:1',
    type: 'number'
  },
  country: {
    name: 'country',
    component: controlsTypes.SELECT,
    label: 'Where do you live',
    rules: 'required',
    options: [{
      value: '',
      text: '---',
      disabled: true
    }, {
      value: 'Hong Kong',
      text: 'Hong Kong'
    }, {
      value: 'USA',
      text: 'USA'
    }, {
      value: 'Australia',
      text: 'Australia'
    }]
  },
  package: {
    name: 'package',
    component: controlsTypes.RADIOGROUP,
    fields: [{
      value: 'Standart',
      text: 'Standart'
    }, {
      value: 'Safe',
      text: 'Safe'
    }, {
      value: 'Super Safe',
      text: 'Super Safe'
    }]
  }
}
