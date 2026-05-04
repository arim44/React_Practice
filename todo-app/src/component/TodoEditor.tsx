import React, { useRef, useState } from 'react';
import './TodoEditor.css'

interface TodoEditorPorps{
    // 내용(스트링)을 받아서 보이드함수로 반환
    onCreate:(content:string) => void;
}

// 투두 작성하기(onCreate() 함수 타입받음)
function TodoEditor({onCreate}:TodoEditorPorps){
    //상태
    const [content, setContent] = useState<string>('');
    // input 요소에 직접 접근하기 위한 ref
    const inputRef = useRef<HTMLInputElement>(null);
    // 상태 업데이트(컨텐트를 셋 컨텐트로 게속 업데이트시킴)
    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }
    // 추가버튼/엔터키 눌렸을때 호출될 함수
    // 이벤트 핸들러의 타입이 보이드, 보이드 타입이어서 맞춰주려고 한번더 감쌈
    const onSubmit = () =>{
        // 내용이 있는지 체크 .trim()으로 공백도 체크
        if(!content.trim()) {
            //컨텐트에 내용이 없으면 입력 포커스 새로 줌
            inputRef.current?.focus();
            return;
        }
        // 생성
        onCreate(content);
        // 텍스트 비움
        setContent('');
    };

    //엔터로 추가하기
    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        // 눌린키가 엔터키면 onsubmit() 호출
        if(e.key === 'Enter'){
            onSubmit();
        }
    }

    return(
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 📝</h4>
            <div className="editor-wrapper">
                <input type="text" placeholder="새로운 Todo..." 
                    onChange={onChangeContent} 
                    ref={inputRef} 
                    onKeyDown={onKeyDown}
                    value={content}
                />
                <button onClick={onSubmit}>추가</button>
                {/* 버튼 클릭 시 onCreate()실행 */}
            </div>
        </div>
    );
}

export default TodoEditor;