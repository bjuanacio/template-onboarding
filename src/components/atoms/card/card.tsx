import { FC } from 'react'
import { ICard } from './card.interfaces'
import './card.scss'

export const Card: FC<ICard> = (
    { children }
) => {

    return (<div className='card-custom'>{children}</div>)
}
