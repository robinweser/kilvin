import { makeResponsiveTransform } from './makeResponsiveTransform'

function applyFactor(factor) {
  return (value) => {
    if (value == null) {
      return undefined
    }

    if (typeof value !== 'number') {
      return value
    }

    return value * factor
  }
}

export default function applyMultiplier(factor = 1) {
  return makeResponsiveTransform({ transform: applyFactor(factor) })
}
