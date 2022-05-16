"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMultiplier;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function applyFactor(factor) {
  return function (value) {
    if (value === undefined || value === null) {
      return undefined;
    }

    if (typeof value !== 'number') {
      return value;
    }

    return value * factor;
  };
}

function applyMultiplier() {
  var factor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var applyFactorToValue = applyFactor(factor);
  return function (value) {
    if (Array.isArray(value)) {
      return value.map(applyFactorToValue);
    } else if (_typeof(value) === 'object') {
      return Object.keys(value).reduce(function (out, key) {
        out[key] = applyFactorToValue(value[key]);
        return out;
      }, {});
    }

    return applyFactorToValue(value);
  };
}