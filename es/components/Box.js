function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React, { Children, forwardRef } from 'react';
import { useFela } from 'react-fela';
import Spacer from '../spacer';
import applyMultiplier from '../utils/applyMultiplier';
var Box = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      As = _ref.as,
      extend = _ref.extend,
      inlineStyle = _ref.style,
      space = _ref.space,
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
      props = _objectWithoutProperties(_ref, ["children", "as", "extend", "style", "space", "className", "padding", "paddingLeft", "paddingRight", "paddingBottom", "paddingTop", "margin", "marginLeft", "marginRight", "marginBottom", "marginTop", "height", "width", "grow", "shrink", "minWidth", "maxWidth", "minHeight", "maxHeight", "order", "alignContent", "justifyContent", "alignItems", "alignSelf", "flex", "basis", "direction", "display", "wrap"]);

  var _useFela = useFela(props),
      css = _useFela.css,
      theme = _useFela.theme;

  var spacing = applyMultiplier(theme.baselineGrid);
  return /*#__PURE__*/React.createElement(As, _extends({}, props, {
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
  }), space ? Children.toArray(children).map(function (child, index, arr) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, child, index === arr.length - 1 ? null : /*#__PURE__*/React.createElement(Spacer, {
      size: space
    }));
  }) : children);
});
Box.displayName = 'Box';
export default Box;
var responsiveProp = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.string, PropTypes.number]);
var responsiveNumberProp = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]);
var responsiveStringProp = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]);
var directionProp = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse'])), PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse'])]);
Box.defaultProps = {
  direction: 'column',
  as: 'div',
  grow: 0,
  shrink: 0,
  basis: 'auto',
  display: 'flex',
  alignItems: 'stretch',
  wrap: 'nowrap'
};
Box.propTypes = {
  /** The HTML node that is rendered. */
  as: PropTypes.string,

  /** Adds a custom CSS class. */
  className: PropTypes.string,

  /** Extends the Fela style object. */
  extend: PropTypes.object,

  /** Adds inline styles. */
  style: PropTypes.object,

  /** Adds spacing between children based on the baselineGrid. */
  space: responsiveNumberProp,

  /** Adds left padding based on the baselineGrid. */
  paddingLeft: responsiveProp,

  /** Adds right padding based on the baselineGrid. */
  paddingRight: responsiveProp,

  /** Adds bottom padding based on the baselineGrid. */
  paddingBottom: responsiveProp,

  /** Adds top padding based on the baselineGrid. */
  paddingTop: responsiveProp,

  /** Adds padding based on the baselineGrid.<br>Overwritten by specific directional paddings. */
  padding: responsiveProp,

  /** Adds left margin based on the baselineGrid. */
  marginLeft: responsiveProp,

  /** Adds right margin based on the baselineGrid. */
  marginRight: responsiveProp,

  /** Adds bottom margin based on the baselineGrid. */
  marginBottom: responsiveProp,

  /** Adds top margin based on the baselineGrid. */
  marginTop: responsiveProp,

  /** Adds margin based on the baselineGrid.<br>Overwritten by specific directional margins. */
  margin: responsiveProp,

  /** Sets display. */
  display: responsiveStringProp,

  /** Sets flex-wrap. */
  wrap: responsiveStringProp,

  /** Sets the flex-direction. */
  direction: directionProp,

  /** Sets flex-grow. */
  grow: responsiveNumberProp,

  /** Sets flex-shrink. */
  shrink: responsiveNumberProp,

  /** Sets flex-basis. */
  basis: responsiveProp,

  /** Sets order. */
  order: responsiveNumberProp,

  /** Sets flex. */
  flex: responsiveProp,

  /** Sets justify-content. */
  justifyContent: responsiveStringProp,

  /** Sets align-content. */
  alignContent: responsiveStringProp,

  /** Sets align-items. */
  alignItems: responsiveStringProp,

  /** Sets align-self. */
  alignSelf: responsiveStringProp,

  /** Sets max-width. */
  maxWidth: responsiveProp,

  /** Sets min-width. */
  minWidth: responsiveProp,

  /** Sets width. */
  width: responsiveProp,

  /** Sets max-height. */
  maxHeight: responsiveProp,

  /** Sets min-height. */
  minHeight: responsiveProp,

  /** Sets height. */
  height: responsiveProp
};