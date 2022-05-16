var _excluded = ["as", "children", "style", "className", "extend", "gap", "columns", "rows", "areas"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { useFela } from 'react-fela';
import applyMultiplier from '../utils/applyMultiplier';
import makeResponsiveTransform from '../utils/makeResponsiveTransform';
import { ruleType, responsiveProp, responsiveStringProp, responsiveStringArrayProp } from '../utils/propTypes';
var transformAreas = makeResponsiveTransform({
  transform: function transform(areas) {
    if (!(areas && areas.length)) {
      return undefined;
    }

    return areas.map(function (area) {
      return "\"".concat(area, "\"");
    }).join(' ');
  },
  isArrayValue: true
});
var Grid = /*#__PURE__*/forwardRef(function (_ref, ref) {
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

  var _useFela = useFela(props),
      css = _useFela.css,
      theme = _useFela.theme;

  var spacing = applyMultiplier(theme.baselineGrid);
  return /*#__PURE__*/React.createElement(As, _extends({}, props, {
    style: style,
    ref: ref,
    className: css({
      _className: className,
      boxSizing: 'border-box',
      display: 'grid',
      gridGap: spacing(gap),
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      gridTemplateAreas: transformAreas(areas)
    }, extend)
  }), children);
});
Grid.displayName = 'Grid';
export default Grid;
Grid.defaultProps = {
  as: 'div',
  gap: 0
};
Grid.propTypes = {
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

  /** Sets the gridGap property */
  gap: responsiveProp,

  /** Sets the gridTemplateColumns property */
  columns: responsiveStringProp,

  /** Sets the gridTemplateRows property */
  rows: responsiveStringProp,

  /** Sets the gridTemplateAreas property */
  areas: responsiveStringArrayProp
};