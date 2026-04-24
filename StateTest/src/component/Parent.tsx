import { useState } from "react";

export default function ParentComponent(){
    const [inputVal, setInputVal] = useState<string>('');
    // 상태를 바꿀수 있는 함수
    const handleInputChange=(value:string) =>{
        setInputVal(value);
    }

    return(
        <div>
            <h1>state 올리기</h1>
        </div>
    );
}