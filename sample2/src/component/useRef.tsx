import { useRef } from "react";

export default function Test() {
    const inputRef = useRef<HTMLInputElement>(null);
    const clickCountRef = useRef<number>(0);
    //let clickCountRef = 0; // 리될때마다 초기화됨 값이 필요하면 스테이트 또는 userRef써야함
    const handleCheck = () => {
        inputRef.current?.focus();
        clickCountRef.current +1;
        console.log(`클릭 횟수 : ${clickCountRef.current}`);
    }

    return (
        <div>
            <input ref = {inputRef} type="text" placeholder="입력하세요" />
            <button onClick={handleCheck}>포커스 및 카운트 증가</button>
        </div>
    );
}