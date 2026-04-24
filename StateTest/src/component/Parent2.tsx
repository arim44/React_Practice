import { useState } from "react";
import StateCounter from "./Child";
import ResetCounter from "./ResetCount";

export default function StateParent(){
    // (상태)숫자타입의 useState 함수에 0을 넣어 
    const [count, setCount] = useState<number>(0);
    // 상태를 바꿀수 있는 함수
    const update = (step:number) => setCount((c) => c+step);
    //리셋
    const resetUpdate = () => setCount(0);  // (reset:number) => setCount((c) => reset);

    return(
        <>
        <p>총 개수:{count}</p>
        {/* 클릭수 1개씩 올림 */}
        <StateCounter step={1} onUpdate={update} />
        <StateCounter step={5} onUpdate={update} />
        <StateCounter step={-1} onUpdate={update} />
        <ResetCounter reset1={resetUpdate} />
        {/* <ResetCounter reset1={reset1} /> */}
        {/* <ResetCounter reset={0} onUpdate={resetUpdate} /> */}
        </>
    );
}