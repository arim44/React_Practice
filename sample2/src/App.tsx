
//import './App.css'
// Hello 파일 임포트
import Hello from './component/Hello';
//import Pre from './component/pretice1';
import Welcome from './component/Welcome';
import Pre2 from './component/PreProps';
import SayHello from './component/SayHello';
import Library from './component/Library';
import { use, useReducer } from 'react';
import Counter from './component/useReducer';
import Login from './component/useReducer2';
import DarkOrLight from './component/Context_Provider';
import CardList from './component/CompositionEX';
import StateForm from './component/FormState';

import { Child, ChildWithMemo } from './component/ReactMemoChild.tsx';
import { useState } from "react";


function App() {
   {/* 리액트.메모 */}
   const [count, setCount] = useState(0);
   const [text, setText] = useState('');

  return (
    <>
    <div>
      <Counter />
      <Login />
      <DarkOrLight />
    </div>
    <div>
      {/* 합성 컴포짓 */}
      <CardList />
      {/* React의 form - State로 관리 */}
      <StateForm />
      {/* 리액트.메모 */}
      <Child value={count} />
      <ChildWithMemo value={count} />
      <button onClick={() => setCount(count+1)}>count증가</button>
      <input value={text} onChange={(e)=> setText(e.target.value)} />
    </div>
    </>
  )
}

export default App

// {/* /*
//     {/* 만든컴포넌트 사용 */}
//       <Pre/>
//       <Welcome name='홍길동'/>
//       <Pre2 name='김연아' age= {20} />

//       <SayHello myName='김연아' to='홍길동' />
      
//       <Library /> */ */}
