"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMultiplier;

var _makeResponsiveTransform = require("./makeResponsiveTransform");

function applyFactor(factor) {
  return function (value) {
    if (value == null) {
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
  return (0, _makeResponsiveTransform.makeResponsiveTransform)({
    transform: applyFactor(factor)
  });
}