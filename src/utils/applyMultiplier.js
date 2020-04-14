function applyFactor(factor) {
  return (value) => {
    if (value === undefined || value === null) {
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

  return (value) => {
    if (Array.isArray(value)) {
      return value.map(applyFactorToValue)
    } else if (typeof value === 'object') {
      return Object.keys(value).reduce((out, key) => {
        out[key] = applyFactorToValue(value[key])
        return out
      }, {})
    }

    return applyFactorToValue(value)
  }
}
