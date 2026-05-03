import './Pagination.css'

interface PaginationProps{
    page: number;
    handlePrev: ()=> void;  //페이지 감소
    handleNext: ()=> void;  //페이지 추가
    isEnd: boolean;
}

// 페이지넘김 함수(페이지수, 이전, 다음, 데이타끝여부)
function Pagination({page, handlePrev, handleNext, isEnd}: PaginationProps) {

    return(
        <div className='pagination'>
            {/* 이전버튼 */}
            <button onClick={handlePrev} disabled={page ===1}>이전</button>
            {/* 페이지 */}
            <span>{page}</span>
            <button onClick={handleNext} disabled={isEnd}>다음</button>
        </div>
    )
}

export default Pagination;

