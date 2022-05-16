export default function makeResponsiveTransform({
  transform,
  isArrayValue = false,
}) {
  return (responsiveValue) => {
    if (Array.isArray(responsiveValue)) {
      if (isArrayValue && !Array.isArray(responsiveValue[0])) {
        return transform(responsiveValue)
      }
      return responsiveValue.map(transform)
    }
    if (isArrayValue) {
      return undefined
    }
    if (responsiveValue && typeof responsiveValue === 'object') {
      return Object.keys(responsiveValue).reduce((out, key) => {
        out[key] = transform(responsiveValue[key])
        return out
      }, {})
    }
    return transform(responsiveValue)
  }
}
