import type { Books } from "../types/Books";
import './Book.css';

type BookCardProps={
    book:Books;
}

function BookCard({book}:BookCardProps){
    const {image, title, author} = book;

    return(
        <>
        <div className="book-card">
            <img src={image} alt={title} className="photo" />
            <h2 className="title">{title}</h2>
            <p className="author">{author}</p>
        
        </div>
        </>
    )
}

export default BookCard;