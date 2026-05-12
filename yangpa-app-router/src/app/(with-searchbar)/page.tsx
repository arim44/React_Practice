'use client'; // 원래 서버컴포넌트 였는데 클라이언트 컴포넌트로 바꿈 (버튼 이벤트 사용, 인터렉션 필요, 윈도우 객체 사용, 등)
// 주의) 클라이언트 컴포넌트안에 서버컴포넌트는 넣을 수 없음

export default function Home() {
  console.log('인덱스 페이지 컴포넌트');
  return (
    <div>
    <h1>인덱스페이지 입니다.</h1>
    <button onClick={()=> console.log('클릭')}>클릭</button>
    </div>
  );
}
