'use client';
import { useSearchParams } from 'next/navigation';
import style from './searchbar.module.css'
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Searchbar() {
    const router = useRouter();                 // 코드로 이동 next/navigation
    const searchParams = useSearchParams();     // params 서치
    const q = searchParams.get('q');            // 키이름 문자열 얻음
    // 서치를 상태로 관리 q가 널이면 빈상태로 초기화
    const [search, setSearch] = useState(q || '');
    //인풋에서 변화가 생기면 상태 업데이트
    const onChangeSearch = (e:ChangeEvent<HTMLInputElement>)=> {
        setSearch(e.target.value);
    };

    //검색 버튼 누를시
    const onSubmit= () => {
        if(!search || q === search) return;
            router.push(`/search?q=${search}`);
    }

    // 엔터키 입력
    const onKeyDwon = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    };

    return (
        <div className={style.searchbar_container}>
            <input 
            type="text" 
            onChange={onChangeSearch}
            onKeyDown={onKeyDwon}
            value={search} />
            <button>검색</button>
            </div>
    );
}