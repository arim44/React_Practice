import type { ApiResponse } from "../component/types/Book";
import { useEffect, useState } from "react";

//쿼리, page, url(나눠서 하려고)
export default function useFetch<T>(query: string, page: number, url: string, apiKey: string) {
    //상태관리
    const [documents, setDocument] = useState<T[]>([]);
    const [isEnd, SetIsEnd] = useState<boolean>(false);

    //패치 useEffect 에 넣어놓고
    useEffect(() => {
        // query 가 없으면 리턴
        if (!query) return;
        //에이싱크 함수
        const fetchBooks = async () => {

            //예외처리
            try {
                //쿼리 엔코딩
                const encodedQuery = encodeURIComponent(query);
                const endPoint = `${url}?query=${encodedQuery}&page=${page}`
                // 패치
                const response = await fetch(endPoint, {
                    headers: {
                        // 키 넣음(나중엔 이렇게 하면 안됨 시크릿에 숨겨서 깃이그노어에)
                        Authorization: apiKey,
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status:${response.status}`)
                }

                const data: ApiResponse<T> = await response.json();

                // data의 도큐먼츠 셋
                setDocument(data.documents);
                // 데이타 끝난 여부
                SetIsEnd(data.meta.is_end);
            } catch (err) {
                console.error('검색 중 오류', err);
            }
        };
        fetchBooks();
    }, [query, page, url, apiKey]);

    //상태로 관리할것들을 보내야함
    return { documents, isEnd };
}