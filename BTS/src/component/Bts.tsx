//데이타는 여기에 있으면 안됨
import { useState } from "react";
import type { Member } from "../types/member";
import MemberCard from "./MemberCard";
import Navigation from "./Navigation";
import './BTS.css'

// 여기는 하나씩 들어옴
interface BTSProps{
    members: Member[];
}

// 멤버 배열 받음
function BTS({members}:BTSProps){
    const [index, setIndex] = useState<number>(0)   // 초기값 0 
    const changeIndex = (newIndex:number):void =>{
        // 온체인지에 전달해줄 함수
        const len= members.length;  //7

        // 0~6 까지 유지되게(마이너스가 되지 않게)
        setIndex((newIndex+len) % len);
    }
    return(
        <div className="member-container">
            <MemberCard member={members[index]} />
            <Navigation index={index} onChangeIndex={changeIndex} />
        </div>
    );
}

export default BTS;