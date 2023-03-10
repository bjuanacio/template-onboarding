import { FC, useEffect, useRef } from 'react'
import fromReactToWebComponentProps from '../../../utils/ds-utils'

export const CheckBox: FC<PichinchaCheckBoxHTMLAttributes> = ({ onClickCheck, ...rest }) => {
  const propsToPass = fromReactToWebComponentProps(rest)

  const checkBoxRef = useRef<HTMLPichinchaCheckBoxElement>()

  const handleOnClick = () => {
    onClickCheck?.()
  }

  useEffect(() => {
    const checkBoxNode = checkBoxRef.current

    checkBoxNode?.addEventListener('click-check', handleOnClick)

    return () => {
      checkBoxNode?.removeEventListener('click-check', handleOnClick)
    }
  }, [checkBoxRef])

  return <pichincha-check-box role="button" ref={checkBoxRef} {...propsToPass}></pichincha-check-box>
}
