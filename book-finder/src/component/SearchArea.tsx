import { useEffect, useState } from 'react';
import './SearchArea.css'
import type { Book, ApiResponse } from './types/Book';
import SearchBar from './SearchBar';
import BookList from './BookList';
import Pagination from './Pagination';
import useFetch from '../hooks/useFetch';

function SearchArea() {
    //상태관리/
    const [query, setQuery] = useState<string>('리액트');
    // 페이지넘김
    const [page, SetPage] = useState<number>(1);
    const url = 'https://dapi.kakao.com/v3/search/book';
    const apiKey = 'KakaoAK c4e15facce023d2ceb611ef5a4685f6b';
    const {documents, isEnd} = useFetch<Book>(query, page, url, apiKey);

    //페이지 리셋
    const resetPage = ()=>{
        SetPage(1);
    }

    // 서치바에 내려줄 함수
    const onChangeQuery = (q: string) => {
        setQuery(q);
    }

    // 페이지 넘기는 함수
    //다음
    const onClickNext = () => {
        SetPage((p) => p + 1);
    }
    // 이전
    const onClickPrev = () => {
        SetPage((p) => p - 1);
    }


    // //패치 useEffect 에 넣어놓고
    // useEffect(() => {
    //     // query 가 없ㅇ면 리턴
    //     if (!query) return;
    //     //에이싱크 함수
    //     const fetchBooks = async () => {
            
    //         //예외처리
    //         try {
    //             //쿼리 엔코딩
    //             const encodedQuery = encodeURIComponent(query);
    //             const endPoint = `https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&page=${page}`;
    //             // 패치
    //             const response = await fetch(endPoint, {
    //                 headers: {
    //                     // 키 넣음(나중엔 이렇게 하면 안됨 시크릿에 숨겨서 깃이그노어에)
    //                     Authorization: 'KakaoAK c4e15facce023d2ceb611ef5a4685f6b'
    //                 },
    //             });
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status:${response.status}`)
    //             }

    //             const data: ApiResponse<Book> = await response.json();

    //             // data의 도큐먼츠 셋
    //             setDocument(data.documents);
    //             // 데이타 끝난 여부
    //             SetIsEnd(data.meta.is_end);
    //         } catch (err) {
    //             console.error('검색 중 오류', err);
    //         }
    //     };
    //     fetchBooks();
    // }, [query, page]);

    return (
        <div className='search-area'>
            <SearchBar onChangeQuery={onChangeQuery} resetPage={resetPage} />
            <BookList books={documents} />
            <Pagination page={page} handlePrev={onClickPrev} handleNext={onClickNext} isEnd={isEnd}/>
        </div>
    )
}

export default SearchArea;

