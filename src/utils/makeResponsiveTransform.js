export default function makeResponsiveTransform(transform) {
  return (responsiveValue) => {
    if (Array.isArray(responsiveValue)) {
      return responsiveValue.map(transform)
    } else if (responsiveValue && typeof responsiveValue === 'object') {
      return Object.keys(responsiveValue).reduce((out, key) => {
        out[key] = transform(responsiveValue[key])
        return out
      }, {})
    }
    return transform(responsiveValue)
  }
}
