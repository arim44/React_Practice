import React from "react";

// 리액트 메모를 거치지 않은 함수
export function Child({value} : {value:number}){
    console.log('Child 렌더링');
    return <div>{value}</div>
}


function child1({value,} : {value:number}){
        console.log('ChildWithMemo 렌더링');
        return <div>{value}</div>
};

// 리액트.메모 거침
export const ChildWithMemo = React.memo(child1);