import { FC, useEffect, useRef } from 'react'
import fromReactToWebComponentProps from '../../../utils/ds-utils'

export const Link: FC<PichinchaLinkHTMLAttributes> = ({ onClick, ...rest }) => {
  const propsToPass = fromReactToWebComponentProps(rest)

  const linkRef = useRef<HTMLPichinchaButtonElement>()

  const handleOnClick = () => {
    console.log('click')
    onClick?.()
  }

  useEffect(() => {
    const linkNode = linkRef.current

    linkNode?.addEventListener('clickbutton', handleOnClick)

    return () => {
      linkNode?.removeEventListener('clickbutton', handleOnClick)
    }
  }, [linkRef])

  return <pichincha-link role="button" ref={linkRef} {...propsToPass}></pichincha-link>
}
