// 던져놓을 공간 만듬
import { createContext } from "react";
import type{ Book } from "../component/types/Book";


// 셋 셀렉티드만 공유하면됨
type BookContextType={
    selectBook:(book:Book)=> void;
};

const BookContext = createContext<BookContextType|null>(null);
BookContext.displayName = 'BookContext';

export default BookContext;