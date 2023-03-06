import { FC, useEffect, useRef } from 'react'
import fromReactToWebComponentProps from '../../../utils/ds-utils'

export const Input: FC<PichinchaInputHTMLAttributes> = ({ onChange, onBlur,...rest }) => {
  const propsToPass = fromReactToWebComponentProps(rest)
  const inputRef = useRef<HTMLPichinchaInputElement>()

  const handleOnChange = (event: CustomEvent) => {
    onChange?.(event.detail)
  }

  const handleBlur = (event: CustomEvent) => {
    onBlur?.(event.detail.currentTarget.value)
  }

  useEffect(() => {
    const currentRef = inputRef.current

    currentRef?.addEventListener('eventValue', handleOnChange)
    currentRef?.addEventListener('iblur', handleBlur)
    return () => {
    currentRef?.removeEventListener('eventValue', handleOnChange)
    currentRef?.removeEventListener('iblur', handleBlur)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef])

  return <pichincha-input ref={inputRef} {...propsToPass}></pichincha-input>
}
