// index 와 인덱스 변환 함수

interface Navigation2Props{
    index: number
    // 함수로 반환
    onChangedIndex:(index:number) => void;
}

export default function Navigation2({index, onChangedIndex}:Navigation2Props){
    // 이전버튼 함수
    const handlePrevBtn = () => {
        onChangedIndex(index-1);
    }
    // 다음 버튼 함수
    const handleNextBtn = () => {
        onChangedIndex(index+1);
    }
  
    return(
        //버튼 2개
        <div className="button-container">
            <button className="nav" onClick={handlePrevBtn}>이전 보기</button>
            <button className="nav" onClick={handleNextBtn}>다음 보기</button>
        </div>
    );
}
