/* @flow */
import { createComponent } from 'react-fela'

type AbsoluteProps = {
  fixed: boolean,
  top?: number | string,
  left?: number | string,
  right?: number | string,
  bottom?: number | string,
  width?: number | string,
  height?: number | string
};
const Absolute = (props: AbsoluteProps) => ({
  display: 'flex',
  position: props.fixed ? 'fixed' : 'absolute',
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  width: props.width,
  height: props.height
})

export default createComponent(Absolute)
