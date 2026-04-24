
//import './App.css'
// Hello 파일 임포트
import Hello from './component/Hello';
import Pre from './component/pretice1';
import Welcome from './component/Welcome';
import Pre2 from './component/PreProps';
import SayHello from './component/SayHello';
import Library from './component/Library';

function App() {
  


  return (
    <>
    {/* 만든컴포넌트 사용 */}
      <Pre/>
      <Welcome name='홍길동'/>
      <Pre2 name='김연아' age= {20} />

      <SayHello myName='김연아' to='홍길동' />
      
      <Library />

    </>
  )
}

export default App
