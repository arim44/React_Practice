// 상태관리 함수
import { useState } from "react";
// 이벤트
import type { ChangeEvent } from "react";

// 인풋 함수
export default function LiveInput() {
    // text 상태, setText상태값을 넘길수 있는 함수
    const [text, setText] = useState<string>('');
    const handleChaner = (e:ChangeEvent<HTMLInputElement>) => {
        // 앞에 값의 영향을 받는게 아니라 함수로 전달 안함(특정 값만 넘김)
        setText(e.target.value);
    };
    
    return(
        <div>
            <h2>실시간 입력 보기</h2>
            <input 
                type="text"
                value={text}
                onChange={handleChaner}
                placeholder="내용을 입력하시오"
            />
            <p>입력한 내용 : <strong>{text}</strong></p>
        </div>
    );
}