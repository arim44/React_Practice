
interface ResetCountProps{
    reset:number;
    // 숫자를 받아서 상태를 업데이트하는 함수
    onUpdate:(val: number) => void;
}

interface ResetCntPorps{
      reset1: () => void;
}

// 리셋 상태 변경 함수
export default function ResetCounter({reset1}: ResetCntPorps) {
    // const handleClick= () => onUpdate(reset);

    return(
        <div>
            <button onClick={reset1}>리셋하기</button>
        </div>
    );
}
// export default function ResetCounter({reset, onUpdate}: ResetCountProps) {
//     // const handleClick= () => onUpdate(reset);

//     return(
//         <div>
//             <button onClick={handleClick}>리셋하기</button>
//             {/* <button className="resetCnt" onClick={handleClick}>
//                 <span>{reset}</span> 리셋하기
//             </button> */}
//         </div>
//     );
// }
