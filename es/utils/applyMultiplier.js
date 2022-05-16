import makeResponsiveTransform from './makeResponsiveTransform';
export default function applyMultiplier() {
  var factor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return makeResponsiveTransform(function (value) {
    if (value == null) {
      return undefined;
    }

    if (typeof value !== 'number') {
      return value;
    }

    return value * factor;
  });
}