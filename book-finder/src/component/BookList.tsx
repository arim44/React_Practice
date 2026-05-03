import BookItem from './BookItem';
import './BookList.css'
import type { Book } from './types/Book';


interface BookListProps{
    books:Book[];
}

// 도큐먼츠(북스)를 받아야 함
function BookList({books} : BookListProps) {
    return(
        <div className='book-list'>
            {books.map((book) =>(
                <BookItem key={book.isbn} book={book} />
            ))}
        </div>
    );
}

export default BookList;