export default function makeResponsiveTransform(transform) {
  return (value) => {
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
