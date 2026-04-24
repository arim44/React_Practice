
interface StateCountPorps{
    step: number;
    // 숫자를 받아서 상태를 업데이트하는 함수
    onUpdate:(val: number) => void;
}

// 카운터 상태 변경 함수
export default function StateCounter({step, onUpdate} : StateCountPorps){
    const handleClick = () => onUpdate(step); 
    return(
        <div>
            {/* 클릭 시 handleClick 값 넣어줌 */}
            <button className="cnt" onClick={handleClick}>
                <span>{step}</span>
            </button>
        </div>
    )
}