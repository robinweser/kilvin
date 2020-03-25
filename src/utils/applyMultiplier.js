export default function applyMultiplier(factor = 1) {
  return value => {
    if (!value) {
      return undefined
    }

    if (Array.isArray(value)) {
      return value.map(v => v * factor)
    }

    return value * factor
  }
}
