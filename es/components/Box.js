var _excluded = ["children", "as", "extend", "style", "space", "spaceType", "containerElement", "className", "padding", "paddingLeft", "paddingRight", "paddingBottom", "paddingTop", "margin", "marginLeft", "marginRight", "marginBottom", "marginTop", "height", "width", "grow", "shrink", "minWidth", "maxWidth", "minHeight", "maxHeight", "order", "alignContent", "justifyContent", "alignItems", "alignSelf", "flex", "basis", "direction", "display", "wrap"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React, { Children, forwardRef } from 'react';
import { useFela } from 'react-fela';
import Spacer from './Spacer';
import applyMultiplier from '../utils/applyMultiplier';
import fillArrayByLength from '../utils/fillArrayByLength';
import arrayifyValue from '../utils/arrayifyValue';
import { ruleType, responsiveProp, responsiveNumberProp, responsiveStringProp } from '../utils/propTypes';

function renderChildren(children, spaceType, containerElement, space, direction) {
  if (spaceType === 'spacer') {
    return Children.toArray(children).map(function (child, index, arr) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: index
      }, child, index === arr.length - 1 ? null : /*#__PURE__*/React.createElement(Spacer, {
        size: space
      }));
    });
  }

  var dirArr = arrayifyValue(direction);
  var spaceArr = arrayifyValue(space);
  var length = Math.max(dirArr.length, spaceArr.length);
  var filledDir = fillArrayByLength(dirArr, length);
  var filledSpace = fillArrayByLength(spaceArr, length);
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
  return Children.toArray(children).map(function (child, index, arr) {
    return index === arr.length - 1 ? /*#__PURE__*/React.createElement(Box, {
      as: containerElement,
      key: index
    }, child) : /*#__PURE__*/React.createElement(Box, _extends({
      as: containerElement
    }, margins, {
      key: index
    }), child);
  });
}

var Box = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
  }), space ? renderChildren(children, spaceType, containerElement, space, direction) : children);
});
Box.displayName = 'Box';
export default Box;
var directionProp = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse'])), PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse'])]);
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
  children: PropTypes.node,

  /** The HTML node that is rendered. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType, PropTypes.func]),

  /** Adds a custom CSS class. */
  className: PropTypes.string,

  /** Extends the Fela style object. */
  extend: PropTypes.oneOfType([ruleType, PropTypes.arrayOf(ruleType)]),

  /** Adds inline styles. */
  style: PropTypes.object,

  /** Adds spacing between children based on the baselineGrid. */
  space: responsiveNumberProp,

  /** Whether spacing is applied using a container or spacer element */
  spaceType: PropTypes.oneOf(['spacer', 'container']),

  /** The component/element that is rendered as a container space */
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType, PropTypes.func]),

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