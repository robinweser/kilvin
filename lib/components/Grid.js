"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactFela = require("react-fela");

var _applyMultiplier = _interopRequireDefault(require("../utils/applyMultiplier"));

var _propTypes2 = require("../utils/propTypes");

var _excluded = ["as", "children", "style", "className", "extend", "gap", "columns", "rows", "areas"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Grid = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var As = _ref.as,
      children = _ref.children,
      style = _ref.style,
      className = _ref.className,
      extend = _ref.extend,
      gap = _ref.gap,
      columns = _ref.columns,
      rows = _ref.rows,
      areas = _ref.areas,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useFela = (0, _reactFela.useFela)(props),
      css = _useFela.css,
      theme = _useFela.theme;

  var spacing = (0, _applyMultiplier.default)(theme.baselineGrid);
  return /*#__PURE__*/_react.default.createElement(As, _extends({}, props, {
    style: style,
    ref: ref,
    className: css({
      _className: className,
      boxSizing: 'border-box',
      display: 'grid',
      gridGap: spacing(gap),
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      gridTemplateAreas: areas
    }, extend)
  }), children);
});
Grid.displayName = 'Grid';
var _default = Grid;
exports.default = _default;
Grid.defaultProps = {
  as: 'div',
  gap: 0
};
Grid.propTypes = {
  /** A JSX node */
  children: _propTypes.default.node,

  /** The HTML node that is rendered. */
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.elementType, _propTypes.default.func]),

  /** Adds a custom CSS class. */
  className: _propTypes.default.string,

  /** Extends the Fela style object. */
  extend: _propTypes.default.oneOfType([_propTypes2.ruleType, _propTypes.default.arrayOf(_propTypes2.ruleType)]),

  /** Adds inline styles. */
  style: _propTypes.default.object,

  /** Sets the gridGap property */
  gap: _propTypes2.responsiveProp,

  /** Sets the gridTemplateColumns property */
  columns: _propTypes2.responsiveStringProp,

  /** Sets the gridTemplateRows property */
  rows: _propTypes2.responsiveStringProp,

  /** Sets the gridTemplateAreas property */
  areas: _propTypes2.responsiveStringArrayProp
};