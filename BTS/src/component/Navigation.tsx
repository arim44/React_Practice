// 버튼 컴포넌트
interface NavigationPorps{
    index: number;
    // 인덱스 변환 보이드함수로 반환
    onChangeIndex:(index:number) => void;
}

// 상위에서 만든 상태 변경   // 프록스로 상태바꿔주는 반환
function Navigation({index, onChangeIndex}:NavigationPorps){
    //다음 버튼 함수
    const handleNext = () => {
        onChangeIndex(index+1);
    }
    // 이전 버튼 함수
    const handlePrev = () => {
        onChangeIndex(index-1);
    }

    return(
        // 버튼 2개
        <div className="button-container">
            <button className="nav" onClick={handlePrev}>이전</button>
            <button className="nav" onClick={handleNext}>다음</button>
        </div>
    );
}

export default Navigation;