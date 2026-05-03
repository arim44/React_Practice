
export type Book = {
    title: string;
    contents: string;
    url: string;
    isbn: string;
    datetime: string;
    authors: string[];
    publisher: string;
    translators: string[];
    price: number;
    sale_price: number;
    thumbnail: string;
    status: string;
}

export type ApiResponse<T> = {
    documents: T[];
    meta: {
        is_end: boolean;
    }
}