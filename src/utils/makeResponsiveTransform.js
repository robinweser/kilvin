export default function makeResponsiveTransform({
  transform,
  isMatrixValue = false,
}) {
  return (value) => {
    if (isMatrixValue) {
      if (Array.isArray(value)) {
        if (Array.isArray(value[0])) {
          if (Array.isArray(value[0][0])) {
            return value.map(transform)
          }
          return transform(value)
        }
      }
      return undefined
    }
    if (Array.isArray(value)) {
      return value.map(transform)
    }
    if (value && typeof value === 'object') {
      return Object.keys(value).reduce((out, key) => {
        out[key] = transform(value[key])
        return out
      }, {})
    }
    return transform(value)
  }
}
