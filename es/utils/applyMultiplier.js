export default function applyMultiplier() {
  var factor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function (value) {
    if (!value) {
      return undefined;
    }

    if (Array.isArray(value)) {
      return value.map(function (v) {
        return v * factor;
      });
    }

    return value * factor;
  };
}