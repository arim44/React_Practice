import { useState } from "react";
import type { Member } from "../types/member";
import MemberCard from "./MemberCard";
import Navigation2 from "./Navigation2";

// 멤버들
interface BTSshowProps{
    // Member의 배열 타입임
    members: Member[];
}

//멤버배열에서 받은 인덱스 번호의 멤버 가져옴
// 받는건 멤버들
export default function BTSshow({members}:BTSshowProps){
    // useState<타입>(초기값) 함수 사용해서 인덱스와 셋인덱스 만듬
    const [index, setIndex] = useState<number>(0);
    // 체인지된 인덱스 (보이드함수 타입인 숫자로된 인덱스를 받음) => 
    const changedIndex = (newIndex:number): void => {
        // 온체인지에 전달해줄 함수
        const len=members.length; //(총 7개 ) 마이너스가 되지 않게 하려고 
        //0~6까지 유지되게(마이너스 되지 않게) 다음버튼 계속 눌러도 순환되게
        setIndex((newIndex+len) % len);
    }
    return(
        <div className="member-container">
            {/* // 멤버카드 */}
            <MemberCard member={members[index]} />
            {/* // 버튼 */}
            <Navigation2 index={index} onChangedIndex={changedIndex} />
        </div>
    );
}