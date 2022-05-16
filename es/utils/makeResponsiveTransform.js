function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export default function makeResponsiveTransform(transform) {
  return function (responsiveValue) {
    if (Array.isArray(responsiveValue)) {
      return responsiveValue.map(transform);
    } else if (responsiveValue && _typeof(responsiveValue) === 'object') {
      return Object.keys(responsiveValue).reduce(function (out, key) {
        out[key] = transform(responsiveValue[key]);
        return out;
      }, {});
    }

    return transform(responsiveValue);
  };
}