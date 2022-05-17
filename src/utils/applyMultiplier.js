import makeResponsiveTransform from './makeResponsiveTransform'

export default function applyMultiplier(factor = 1) {
  return makeResponsiveTransform((value) => {
    if (value === undefined || value === null) {
      return undefined
    }

    if (typeof value !== 'number') {
      return value
    }

    return value * factor
  })
}
