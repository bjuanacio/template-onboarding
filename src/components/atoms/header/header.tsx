import { FC } from 'react';
import { IHeader } from './header.interfaces';
import './header.scss';
import { Typography } from '../typography/typography';

export const Header: FC<IHeader> = (
    { title, userName }
) => {

    return (
        <div className='header'>
            <Typography align='left'>{title}</Typography>
            <Typography align='right'>{userName}</Typography>
        </div>
    );
};
