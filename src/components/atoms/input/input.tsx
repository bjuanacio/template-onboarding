import { FC, useEffect, useRef } from 'react'
import fromReactToWebComponentProps from '../../../utils/ds-utils'

export const Input: FC<PichinchaInputHTMLAttributes> = ({ onChange, ...rest }) => {
  const propsToPass = fromReactToWebComponentProps(rest)
  const inputRef = useRef<HTMLPichinchaInputElement>()

  const handleOnChange = (event: CustomEvent) => {

    const eventElemen = event?.currentTarget as Element;
    const name = eventElemen.getAttribute('name-element') || '';
    console.log(name)
    onChange?.(event.detail, name);
  }

  useEffect(() => {
    const currentRef = inputRef.current

    currentRef?.addEventListener('eventValue', handleOnChange)
    return () => {
      currentRef?.removeEventListener('eventValue', handleOnChange)
    }
  }, [inputRef])

  return <pichincha-input ref={inputRef} {...propsToPass}></pichincha-input>
}
