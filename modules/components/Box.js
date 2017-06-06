/* @flow */
import { createComponent } from 'react-fela'

type BoxProps = {
  padding?: number | string,
  margin?: number | string,
  border?: string,
  borderWidth?: number | string,
  overflow?: boolean,
  width?: number | string,
  height?: number | string,
  grow?: boolean | number,
  shrink?: number,
  basis?: number | string,
  flex?: boolean | number,
  justifyContent?: string,
  center?: boolean,
  alignItems?: string,
  alignSelf?: string,
  order?: number,
  inline?: boolean,
  row?: boolean,
  wrap?: boolean,
  wrapReverse?: boolean
};
const Box = (props: BoxProps) => ({
  // container
  padding: props.padding,
  margin: props.margin,
  border: props.border,
  borderWidth: props.borderWidth,
  overflow: props.overflow ? 'visible' : 'hidden',
  width: props.width,
  height: props.height,
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
  display: `flex${props.inline ? '-inline' : ''}`,
  flexWrap: props.wrap && 'wrap' || props.wrapReverse && 'wrap-reverse' || 'nowrap',
  flexDirection: (props.row ? 'row' : 'column') + (props.reverse ? '-reverse' : '')
})

export default createComponent(Box)
