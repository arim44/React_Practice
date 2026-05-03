import { useContext } from 'react';
import './BookItem.css'
import type { Book } from './types/Book';
import BookContext from '../contexts/BookContext';

interface BookItemProps {
    book: Book;
}

//책 한권의 대한 정보를 받아야 함
function BookItem({ book }: BookItemProps) {
    // 널체크
    const context = useContext(BookContext);
    if (!context) throw new Error('Context가 없습니다')
    const {selectBook} = context;

    return (
        <div className='book-item' onClick={()=> selectBook(book)}>
            <img src={book.thumbnail} alt={`${book.title}의 표지`} />
            <div className='book-info'>
                <h3>{book.title}</h3>
                {/* 작가들은 여러명이라 join으로  */}
                <p>{book.authors.join(', ')}</p>
                <p>{book.price}</p>
            </div>
        </div>
    )
}

export default BookItem;