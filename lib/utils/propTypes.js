"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruleType = exports.responsiveStringArrayProp = exports.responsiveStringProp = exports.responsiveNumberProp = exports.responsiveProp = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var responsiveProp = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])), _propTypes.default.string, _propTypes.default.number]);

exports.responsiveProp = responsiveProp;

var responsiveNumberProp = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.number), _propTypes.default.number]);

exports.responsiveNumberProp = responsiveNumberProp;

var responsiveStringProp = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.string]);

exports.responsiveStringProp = responsiveStringProp;

var responsiveStringArrayProp = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.string)), _propTypes.default.arrayOf(_propTypes.default.string)]);

exports.responsiveStringArrayProp = responsiveStringArrayProp;

var ruleType = _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.array]);

exports.ruleType = ruleType;