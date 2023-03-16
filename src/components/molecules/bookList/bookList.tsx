import { FC } from 'react';
import { Book } from '../../../utils/interfaces/book';
import { BookItem } from '../../atoms/book/book';
import './bookList.scss';

interface IBookList {
    books: Book[];
    rowMax: number;
}



export const BookList: FC<IBookList> = (
    { books, rowMax }
) => {

    return (
        <div className='bookList--container'>
            {
                books.map((book: Book) => {
                    return <BookItem key={book.id} {...book}></BookItem>;
                })
            }

        </div>
    );
};
