export const controlsTypes = {
  TEXT: 'text',
  SELECT: 'select',
  RADIOGROUP: 'radiogroup'
}

const controlsMapper = {
  [controlsTypes.TEXT]: 'XInput',
  [controlsTypes.SELECT]: 'XSelect',
  [controlsTypes.RADIOGROUP]: 'XRadioGroup'
}

export const getComponent = (type) => {
  return controlsMapper[type]
}
