import type { Member } from "../types/member";
import './MemberCard.css';

// 인터페이스는 상속이 가능함
// interface BTSProps{
//     name: string;
//     image: string;
// }

type MemberCardProps={
    member:Member;
}

// alt 이미지를 못가져오면 대체하는 한글로 보여줌(정보)
function MemberCard({member}:MemberCardProps){
    const {image, nick} = member;

    return(
        <div className="member-card">
            <img src={image} alt={nick}className="photo" />
            <h2 className="nick">{nick}</h2>
            <p className="team">BTS</p>
        </div>
    )
}

export default MemberCard;