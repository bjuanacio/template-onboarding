import { FC, useEffect, useRef } from 'react'
import fromReactToWebComponentProps from '../../../utils/ds-utils'

export const Alert: FC<PichinchaAlertMessageHTMLAttributes> = ({ closeMessage, ...rest }) => {
    const propsToPass = fromReactToWebComponentProps(rest)

    const alertRef = useRef<HTMLPichinchaAlertMessageElement>()

    const handleClose = () => {
        console.log('closed')
        console.log(propsToPass.open)
  
        closeMessage?.()
        console.log(propsToPass.open)
        propsToPass.open = false;
    }

    useEffect(() => {
        const alertNode = alertRef.current

        alertNode?.addEventListener('closeMessage', handleClose)

        return () => {
            alertNode?.removeEventListener('closeMessage', handleClose)
        }
    }, [alertRef])

    return <pichincha-alert-message ref={alertRef} {...propsToPass}></pichincha-alert-message>
}
