import './BookDetail.css'
import type { Book } from './types/Book';

interface BookDetailProps{
    book:Book | null;
}

// 북아이템 클릭 시 나올 상세페이지(책 한권 넘겨받음)
function BookDetail({book}:BookDetailProps) {
     if(!book) {
            return(
                <div className='book-detail'>책을 선택하세요.</div>
            )
        }
    return(
       
        <div className='book-detail'>
          <h2>{book.title}</h2>
          <p>
            <strong>저자:</strong> {book.authors.join(', ')}
          </p>
          <p>
            <strong>출판사:</strong>{book.publisher}
          </p>
          <p>
            <strong>출판일:</strong>{book.datetime.split("T")[0]}
          </p>
           <p>
            <strong>ISBN:</strong>{book.isbn}
          </p>
           <p>
            <strong>챡내용:</strong>{book.contents}
          </p>
           <p>
            <strong>상세내용:</strong> <a href={book.url} target='_blank' />
          </p>
          <img src={book.thumbnail} alt={`${book.title}의 표지`}/>
        </div>
    )
}

export default BookDetail;