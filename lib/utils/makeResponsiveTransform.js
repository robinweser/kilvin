"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeResponsiveTransform;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function makeResponsiveTransform(_ref) {
  var transform = _ref.transform,
      _ref$isArrayValue = _ref.isArrayValue,
      isArrayValue = _ref$isArrayValue === void 0 ? false : _ref$isArrayValue;
  return function (responsiveValue) {
    if (Array.isArray(responsiveValue)) {
      if (isArrayValue && !Array.isArray(responsiveValue[0])) {
        return transform(responsiveValue);
      }

      return responsiveValue.map(transform);
    }

    if (isArrayValue) {
      return undefined;
    }

    if (responsiveValue && _typeof(responsiveValue) === 'object') {
      return Object.keys(responsiveValue).reduce(function (out, key) {
        out[key] = transform(responsiveValue[key]);
        return out;
      }, {});
    }

    return transform(responsiveValue);
  };
}