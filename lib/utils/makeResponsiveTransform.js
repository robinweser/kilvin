"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeResponsiveTransform;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function makeResponsiveTransform(transform) {
  return function (value) {
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