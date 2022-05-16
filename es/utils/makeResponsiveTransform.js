function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export default function makeResponsiveTransform(_ref) {
  var transform = _ref.transform,
      _ref$isMatrixValue = _ref.isMatrixValue,
      isMatrixValue = _ref$isMatrixValue === void 0 ? false : _ref$isMatrixValue;
  return function (value) {
    if (isMatrixValue) {
      if (Array.isArray(value)) {
        if (Array.isArray(value[0])) {
          if (Array.isArray(value[0][0])) {
            return value.map(transform);
          }

          return transform(value);
        }
      }

      return undefined;
    }

    if (Array.isArray(value)) {
      return value.map(transform);
    }

    if (value && _typeof(value) === 'object') {
      return Object.keys(value).reduce(function (out, key) {
        out[key] = transform(value[key]);
        return out;
      }, {});
    }

    return transform(value);
  };
}