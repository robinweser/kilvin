import PropTypes from 'prop-types';
export var responsiveProp = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.string, PropTypes.number]);
export var responsiveNumberProp = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]);
export var responsiveStringProp = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]);
export var ruleType = PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]);