import { createComponent } from 'react-fela'

const Box = props => ({
  // container
  padding: props.padding,
  margin: props.margin,
  border: props.border,
  borderWidth: props.borderWidth,
  overflow: props.overflow ? 'visible' : 'hidden',
  maxWidth: '100%',

  // flex props
  flexGrow: props.grow === true ? 1 : props.grow,
  flexShrink: props.shrink || 0,
  flexBasis: props.basis || 'auto',
  flex: props.flex === true ? 1 : props.flex,
  justifyContent: props.justifyContent || props.center && 'center',
  alignItems: props.alignItems || props.center && 'center',
  alignContent: props.alignContent || 'flex-start',
  alignSelf: props.alignSelf || 'stretch',
  order: props.order,

  // shorthands
  display: 'flex' + (props.inline ? '-inline' : ''),
  flexWrap: props.wrap && 'wrap' || props.wrapReverse && 'wrap-reverse' || 'nowrap',
  flexDirection: (props.row ? 'row' : 'column') + (props.reverse ? '-reverse' : '')
})

export default createComponent(Box)
