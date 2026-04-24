import { useState } from "react";
import StateSwap from "./SwitchCard";
import MemberCard from "./MemberCard";

//<MemberCard member=members[0] /> {member:}
//<MemberCard member={image:'/bts/bts1.png', nick: 'RM'} /> {member:}

export default function ShowMemberCard(){
    const [count, setCount] = useState<number>(0);
    const update = (step: number) => setCount((c) => c+step);
    const index = (step: number) => step;

    return (
        <div>
           
        {/* <MemberCard member={members[index]} /> */}
        <StateSwap step={-1} onUpdate={update} />
        <StateSwap step={1} onUpdate={update} />
        
        </div>
    )
}
 //<MemberCard member={members[1]} />