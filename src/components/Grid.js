import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { useFela } from 'react-fela'

import applyMultiplier from '../utils/applyMultiplier'

import {
  ruleType,
  responsiveProp,
  responsiveStringProp,
} from '../utils/propTypes'

const Grid = forwardRef(
  (
    {
      as: As,
      children,
      style: inlineStyle,
      className,
      extend,
      gap,
      columns,
      rows,
      ...props
    },
    ref
  ) => {
    const { css, theme } = useFela(props)
    const spacing = applyMultiplier(theme.baselineGrid)

    return (
      <As
        {...props}
        style={inlineStyle}
        ref={ref}
        className={css(
          {
            _className: className,
            boxSizing: 'border-box',
            display: 'grid',
            gridGap: spacing(gap),
            gridTemplateColumns: columns,
            gridTemplateRows: rows,
          },
          extend
        )}>
        {children}
      </As>
    )
  }
)

Grid.displayName = 'Grid'
export default Grid

Grid.defaultProps = {
  as: 'div',
  gap: 0,
}

Grid.propTypes = {
  /** The HTML node that is rendered. */
  as: PropTypes.string,
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
}
