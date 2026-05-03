import './BookFinder.css'
import Header from './Header';
import Footer from './Footer';
import SearchArea from './SearchArea';
import BookDetail from './BookDetail';
import { useState } from 'react';
import type { Book } from './types/Book';
import BookContext from '../contexts/BookContext';

function BookFinder() {
    //컨텍스트 상태(선택이 아니면 널도 올수 있음)
    const [selected, SetSelected] = useState<Book | null>(null);

    const selectBook = (book: Book) => {
        SetSelected(book);
    }

    return (
        <BookContext.Provider value={{selectBook}}>
            <div className='BookFinder'>
                {/* 헤더 추가 */}
                <Header />
                <div className='main-content'>
                    <SearchArea />
                    <BookDetail book={selected} />
                </div>
                <Footer />

            </div>
        </BookContext.Provider>
    )
}

export default BookFinder;