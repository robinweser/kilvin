import * as React from 'react';
import PropTypes from 'prop-types';
import { useFela } from 'react-fela';
import Box from './Box';
import applyMultiplier from '../utils/applyMultiplier';

function getDisplayBySize(size) {
  return size === 0 ? 'none' : 'flex';
}

export default function Spacer(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1 : _ref$size;

  var _useFela = useFela(),
      theme = _useFela.theme;

  var spacing = applyMultiplier(theme.baselineGrid);
  var space = spacing(size);
  var display = Array.isArray(space) ? space.map(getDisplayBySize) : getDisplayBySize(space);
  return /*#__PURE__*/React.createElement(Box, {
    display: display,
    width: space,
    basis: space
  });
}