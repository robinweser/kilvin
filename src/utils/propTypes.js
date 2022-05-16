import PropTypes from 'prop-types'

export const responsiveProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  PropTypes.string,
  PropTypes.number,
])

export const responsiveNumberProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.number),
  PropTypes.number,
])

export const responsiveStringProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string,
])

export const responsiveStringArrayProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  PropTypes.arrayOf(PropTypes.string),
])

export const ruleType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.func,
  PropTypes.array,
])
