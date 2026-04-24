
interface StateSwapProps{
    step: number;
    onUpdate: (val: number) => void;
}

// 카드 스왑(교환) 함수
export default function StateSwap({step, onUpdate}:StateSwapProps) {
    const handleSwap = () => onUpdate(step);

    return(
        <div>
            <button className="cnt" onClick={handleSwap}>{step}</button>
        </div>
    )
}