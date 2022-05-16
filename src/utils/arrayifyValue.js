export default function arrayifyValue(value) {
  if (Array.isArray(value)) {
    return value
  }
  return [value]
}
