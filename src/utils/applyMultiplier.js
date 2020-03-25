function applyFactor(factor) {
  return value => {
    if (!value) {
      return undefined
    }

    if (typeof value !== 'number') {
      return value
    }

    return value * factor
  }
}

export default function applyMultiplier(factor = 1) {
  const applyFactorToValue = applyFactor(factor)

  return value => {
    if (Array.isArray(value)) {
      return value.map(applyFactorToValue)
    }

    return applyFactorToValue(value)
  }
}
