import React, { useRef, useState } from 'react';
import './TodoEditor.css'

interface TodoEditorPorps{
    onCreate:(content:string) => void;
}

function TodoEditor({onCreate}:TodoEditorPorps){
    //상태
    const [content, setContent] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);
    // 상태 업데이트(컨텐트를 셋 컨텐트로 게속 업데이트시킴)
    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }
    // 이벤트 핸들러의 타입이 보이드, 보이드 타입이어서 맞춰주려고 한번더 감쌈
    const onSubmit = () =>{
        //컨텐트에 내용이 없으면 입력 포커스 새로 줌
        if(!content) {
            inputRef.current?.focus();
            return;
        }
        onCreate(content);
        setContent('');
    };

    //엔터로 추가하기
    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        // 눌려진 키보드가 엔터면
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