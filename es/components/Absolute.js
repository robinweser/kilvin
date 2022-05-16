var _excluded = ["top", "left", "right", "bottom", "width", "height", "fixed", "children", "extend"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import Box from './Box';
export default function Absolute(_ref) {
  var top = _ref.top,
      left = _ref.left,
      right = _ref.right,
      bottom = _ref.bottom,
      width = _ref.width,
      height = _ref.height,
      _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === void 0 ? false : _ref$fixed,
      children = _ref.children,
      extend = _ref.extend,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({}, props, {
    extend: [{
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      width: width,
      height: height,
      position: fixed ? 'fixed' : 'absolute'
    }, extend]
  }), children);
}