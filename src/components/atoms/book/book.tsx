import { FC } from 'react';
import { Book } from "../../../utils/interfaces/book";
import './book.scss';


export const BookItem: FC<Book> = (
    { id, image }
) => {

    return (
        <div className='book--container'>
            <img alt="book" src={image} className="card__img" />
        </div>
    );
};
