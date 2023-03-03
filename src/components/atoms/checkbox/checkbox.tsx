import { FC, useEffect, useRef } from 'react'
import fromReactToWebComponentProps from '../../../utils/ds-utils'

export const Checkbox: FC<PichinchaCheckboxHTMLAttributes> = ({ onChange, ...rest }) => {
  const propsToPass = fromReactToWebComponentProps(rest)

  const checkboxRef = useRef<HTMLPichinchaCheckboxElement>()

  const handleOnChange = (event: CustomEvent) => {
    onChange?.(event.detail)
  }

  useEffect(() => {
    const currentRef = checkboxRef.current

    currentRef?.addEventListener('eventValue', handleOnChange)
    return () => {
      currentRef?.removeEventListener('eventValue', handleOnChange)
    }
  }, [checkboxRef])

  return <pichincha-check-box ref={checkboxRef} {...propsToPass}></pichincha-check-box>
}
