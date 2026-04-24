import React, { useState } from 'react'
//import './App.css'
import type { Member } from './types/member'
import BTS from './component/Bts'
import MemberCard from './component/MemberCard'

// 데이타
const members: Member[] = [
  {image:'/bts/bts1.png', nick: 'RM'},  
  {image:'/bts/bts2.png', nick: '진'},
  {image:'/bts/bts3.png', nick: '슈가'},
  {image:'/bts/bts4.png', nick: '제이홉'},
  {image:'/bts/bts5.png', nick: '지민'},
  {image:'/bts/bts6.png', nick: '뷔'},
  {image:'/bts/bts7.png', nick: '정국'},
]

////<MemberCard member=members[0] /> {member:}
////<MemberCard member={image:'/bts/bts1.png', nick: 'RM'} /> {member:}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {members.map((member) => (
          <React.Fragment key= {member.nick}>
            <MemberCard member= {member}></MemberCard>
          </React.Fragment>
        ))}

      {/* 멤버카드 버튼으로 넘기기
        <BTS members={members} /> */}

      {/* <MemberCard member={members[0]} />
      <MemberCard member={members[1]} />
      <MemberCard member={members[2]} />
      <MemberCard member={members[3]} />
      <MemberCard member={members[4]} />
      <MemberCard member={members[5]} />
      <MemberCard member={members[6]} /> */}
    </div>
    </>
  );
}

export default App
