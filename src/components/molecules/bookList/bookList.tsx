import { FC } from 'react';
import { Book, IBook } from '../../atoms/book/book';
import './bookList.scss';

interface IBookList {
    books: IBook[];
    rowMax: number;
}



export const BookList: FC<IBookList> = (
    { books, rowMax }
) => {

    return (
        <div className='bookList--container'>
            {
                books.map((book: IBook) => {
                    return <Book key={book.id} {...book}></Book>;
                })
            }

        </div>
    );
};
