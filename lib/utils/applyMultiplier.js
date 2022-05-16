"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMultiplier;

var _makeResponsiveTransform = _interopRequireDefault(require("./makeResponsiveTransform"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _makeResponsiveTransform.default)({
    transform: applyFactor(factor)
  });
}