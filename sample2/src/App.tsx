
//import './App.css'
// Hello 파일 임포트
import Hello from './component/Hello';
//import Pre from './component/pretice1';
import Welcome from './component/Welcome';
import Pre2 from './component/PreProps';
import SayHello from './component/SayHello';
import Library from './component/Library';
import { useReducer } from 'react';
import Counter from './component/useReducer';
import Login from './component/useReducer2';
import DarkOrLight from './component/Context_Provider';

function App() {

  return (
    <>
    <div>
      <Counter />
      <Login />
      <DarkOrLight />
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
