import './Header.css'
import React from 'react';

function Header(){
    console.log('Header 업데이트');
    return(
        <div className="Header">
            {/* 특수문자 ctrl + cmd + 스페이스바 */}
            <h3> 오늘은 🗓️ </h3>
            <h1>{new Date().toDateString()}</h1>
            {/* 한국어 형식 */}
            <h1>{new Date().toLocaleDateString('ko-KR', 
                {year: 'numeric', month: 'long', day: 'numeric', weekday:'long'})}</h1> 
        </div>
    );
}

export default React.memo(Header);