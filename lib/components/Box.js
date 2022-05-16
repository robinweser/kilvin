"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactFela = require("react-fela");

var _Spacer = _interopRequireDefault(require("./Spacer"));

var _applyMultiplier = _interopRequireDefault(require("../utils/applyMultiplier"));

var _fillArrayByLength = _interopRequireDefault(require("../utils/fillArrayByLength"));

var _arrayifyValue = _interopRequireDefault(require("../utils/arrayifyValue"));

var _propTypes2 = require("../utils/propTypes");

var _excluded = ["children", "as", "extend", "style", "space", "spaceType", "containerElement", "className", "padding", "paddingLeft", "paddingRight", "paddingBottom", "paddingTop", "margin", "marginLeft", "marginRight", "marginBottom", "marginTop", "height", "width", "grow", "shrink", "minWidth", "maxWidth", "minHeight", "maxHeight", "order", "alignContent", "justifyContent", "alignItems", "alignSelf", "flex", "basis", "direction", "display", "wrap"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function renderChildren(children, spaceType, containerElement, space, direction) {
  if (spaceType === 'spacer') {
    return _react.Children.toArray(children).map(function (child, index, arr) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: index
      }, child, index === arr.length - 1 ? null : /*#__PURE__*/_react.default.createElement(_Spacer.default, {
        size: space
      }));
    });
  }

  var dirArr = (0, _arrayifyValue.default)(direction);
  var spaceArr = (0, _arrayifyValue.default)(space);
  var length = Math.max(dirArr.length, spaceArr.length);
  var filledDir = (0, _fillArrayByLength.default)(dirArr, length);
  var filledSpace = (0, _fillArrayByLength.default)(spaceArr, length);
  var margins = {
    marginRight: filledDir.map(function (dir, i) {
      return dir === 'row' ? filledSpace[i] : undefined;
    }),
    marginBottom: filledDir.map(function (dir, i) {
      return dir === 'column' ? filledSpace[i] : undefined;
    }),
    marginLeft: filledDir.map(function (dir, i) {
      return dir === 'row-reverse' ? filledSpace[i] : undefined;
    }),
    marginTop: filledDir.map(function (dir, i) {
      return dir === 'column-reverse' ? filledSpace[i] : undefined;
    })
  };
  return _react.Children.toArray(children).map(function (child, index, arr) {
    return index === arr.length - 1 ? /*#__PURE__*/_react.default.createElement(Box, {
      as: containerElement,
      key: index
    }, child) : /*#__PURE__*/_react.default.createElement(Box, _extends({
      as: containerElement
    }, margins, {
      key: index
    }), child);
  });
}

var Box = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      As = _ref.as,
      extend = _ref.extend,
      inlineStyle = _ref.style,
      space = _ref.space,
      spaceType = _ref.spaceType,
      containerElement = _ref.containerElement,
      className = _ref.className,
      padding = _ref.padding,
      paddingLeft = _ref.paddingLeft,
      paddingRight = _ref.paddingRight,
      paddingBottom = _ref.paddingBottom,
      paddingTop = _ref.paddingTop,
      margin = _ref.margin,
      marginLeft = _ref.marginLeft,
      marginRight = _ref.marginRight,
      marginBottom = _ref.marginBottom,
      marginTop = _ref.marginTop,
      height = _ref.height,
      width = _ref.width,
      grow = _ref.grow,
      shrink = _ref.shrink,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      minHeight = _ref.minHeight,
      maxHeight = _ref.maxHeight,
      order = _ref.order,
      alignContent = _ref.alignContent,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      alignSelf = _ref.alignSelf,
      flex = _ref.flex,
      basis = _ref.basis,
      direction = _ref.direction,
      display = _ref.display,
      wrap = _ref.wrap,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useFela = (0, _reactFela.useFela)(props),
      css = _useFela.css,
      theme = _useFela.theme;

  var spacing = (0, _applyMultiplier.default)(theme.baselineGrid);
  return /*#__PURE__*/_react.default.createElement(As, _extends({}, props, {
    style: inlineStyle,
    ref: ref,
    className: css({
      _className: className,
      boxSizing: 'border-box',
      flexDirection: direction,
      flexWrap: wrap,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      flex: flex,
      justifyContent: justifyContent,
      alignContent: alignContent,
      alignItems: alignItems,
      alignSelf: alignSelf,
      order: order,
      display: display,
      maxWidth: maxWidth,
      minWidth: minWidth,
      width: width,
      maxHeight: maxHeight,
      minHeight: minHeight,
      height: height,
      padding: spacing(padding),
      paddingLeft: spacing(paddingLeft),
      paddingRight: spacing(paddingRight),
      paddingBottom: spacing(paddingBottom),
      paddingTop: spacing(paddingTop),
      margin: spacing(margin),
      marginLeft: spacing(marginLeft),
      marginRight: spacing(marginRight),
      marginBottom: spacing(marginBottom),
      marginTop: spacing(marginTop)
    }, extend)
  }), space ? renderChildren(children, spaceType, containerElement, space, direction) : children);
});
Box.displayName = 'Box';
var _default = Box;
exports.default = _default;

var directionProp = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(['row', 'column', 'row-reverse', 'column-reverse'])), _propTypes.default.oneOf(['row', 'column', 'row-reverse', 'column-reverse'])]);

Box.defaultProps = {
  direction: 'column',
  as: 'div',
  grow: 0,
  shrink: 0,
  basis: 'auto',
  display: 'flex',
  alignItems: 'stretch',
  wrap: 'nowrap',
  spaceType: 'spacer',
  containerElement: 'div'
};
Box.propTypes = {
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

  /** Adds spacing between children based on the baselineGrid. */
  space: _propTypes2.responsiveNumberProp,

  /** Whether spacing is applied using a container or spacer element */
  spaceType: _propTypes.default.oneOf(['spacer', 'container']),

  /** The component/element that is rendered as a container space */
  containerElement: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.elementType, _propTypes.default.func]),

  /** Adds left padding based on the baselineGrid. */
  paddingLeft: _propTypes2.responsiveProp,

  /** Adds right padding based on the baselineGrid. */
  paddingRight: _propTypes2.responsiveProp,

  /** Adds bottom padding based on the baselineGrid. */
  paddingBottom: _propTypes2.responsiveProp,

  /** Adds top padding based on the baselineGrid. */
  paddingTop: _propTypes2.responsiveProp,

  /** Adds padding based on the baselineGrid.<br>Overwritten by specific directional paddings. */
  padding: _propTypes2.responsiveProp,

  /** Adds left margin based on the baselineGrid. */
  marginLeft: _propTypes2.responsiveProp,

  /** Adds right margin based on the baselineGrid. */
  marginRight: _propTypes2.responsiveProp,

  /** Adds bottom margin based on the baselineGrid. */
  marginBottom: _propTypes2.responsiveProp,

  /** Adds top margin based on the baselineGrid. */
  marginTop: _propTypes2.responsiveProp,

  /** Adds margin based on the baselineGrid.<br>Overwritten by specific directional margins. */
  margin: _propTypes2.responsiveProp,

  /** Sets display. */
  display: _propTypes2.responsiveStringProp,

  /** Sets flex-wrap. */
  wrap: _propTypes2.responsiveStringProp,

  /** Sets the flex-direction. */
  direction: directionProp,

  /** Sets flex-grow. */
  grow: _propTypes2.responsiveNumberProp,

  /** Sets flex-shrink. */
  shrink: _propTypes2.responsiveNumberProp,

  /** Sets flex-basis. */
  basis: _propTypes2.responsiveProp,

  /** Sets order. */
  order: _propTypes2.responsiveNumberProp,

  /** Sets flex. */
  flex: _propTypes2.responsiveProp,

  /** Sets justify-content. */
  justifyContent: _propTypes2.responsiveStringProp,

  /** Sets align-content. */
  alignContent: _propTypes2.responsiveStringProp,

  /** Sets align-items. */
  alignItems: _propTypes2.responsiveStringProp,

  /** Sets align-self. */
  alignSelf: _propTypes2.responsiveStringProp,

  /** Sets max-width. */
  maxWidth: _propTypes2.responsiveProp,

  /** Sets min-width. */
  minWidth: _propTypes2.responsiveProp,

  /** Sets width. */
  width: _propTypes2.responsiveProp,

  /** Sets max-height. */
  maxHeight: _propTypes2.responsiveProp,

  /** Sets min-height. */
  minHeight: _propTypes2.responsiveProp,

  /** Sets height. */
  height: _propTypes2.responsiveProp
};