import { FC } from 'react';
import './book.scss';

export interface IBook {
    id: string;
    public: true;
    author: string;
    resume: string;
    title: string;
    subtitle: string;
    image: string;
    url: string;
    category: number[];
    userRegister: string;
    isHovered?: boolean;
}

export const Book: FC<IBook> = (
    { id, image }
) => {

    return (
        <div className='book--container'>
            <img alt="book" src={image} className="card__img" />
        </div>
    );
};
