/* @flow */
import { createComponent } from 'react-fela'

function getUnit(value: number | string) {
  if (typeof value === 'number') {
    return 'px'
  }

  return ''
}

type SpacerProps = {size: number, horizontal?: boolean};
const Spacer = ({ size, horizontal}: SpacerProps) => ({
  minHeight: !horizontal && size,
  minWidth: horizontal && size,
  flex: '0 0 ' + size + getUnit(size)
})

export default createComponent(Spacer)
