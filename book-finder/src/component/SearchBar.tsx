import { useRef } from 'react';
import './SearchBar.css'

interface SearchBarProps{
    onChangeQuery: (q:string) => void;
    resetPage: ()=> void;
}


function SearchBar({onChangeQuery, resetPage} :SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    // 버튼 타입 맞추기(보이드, 보이드)
    const handleSearchClick = () =>{
        // input 의 value 를 onChangeQuery 해주면됨
        // 널체크(초기값 널로 줬기떄문에)
        if(!inputRef.current) return;
        onChangeQuery(inputRef.current.value);
        resetPage();
    };

    return(
        <div className='search-bar'>
            <input type='text' placeholder='검색어를 입력하세요.' ref={inputRef} />
            <button onClick={handleSearchClick}>검색</button>
        </div>
    );
}

export default SearchBar;