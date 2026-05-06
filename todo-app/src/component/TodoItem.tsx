import './TodoItem.css'
import type { Todo } from '../App';
import React, { useCallback, useContext } from 'react';
import { TodoDispatchContext } from './TodoContext';
// import TodoContext from './TodoContext';


// todo를 한개, 체크업데이트, 삭제 받음
interface TodoItemProps {
    todo: Todo;
    // onUpdate: (targetId: number) => void;
    // onDelete: (targetId: number) => void;
}

function TodoItem({ todo}: TodoItemProps) {
    console.log(`${todo.id} TodoItem 업데이트`);
    // 투두컨텍스트에서 onUpdate, onDelete 가져오기
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    // 체크박스 토글
    const onChangeCheckbox = () => {
        onUpdate(todo.id);
    }

    // 삭제시 타입 맞추기
    const onClickDelete = () => {
        onDelete(todo.id);
    };

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" checked={todo.isDone} onChange={onChangeCheckbox} />
            </div>
            <div className="title_col">{todo.content}</div>
            <div className="date_col">{new Date(todo.createDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

// 리액트 메모는 props가 바꼈을떄 다시 그림 그래서 안의 변수들도 안바뀌게 해야함
// 함수가 다시 정의되지 않게 usecallback
export default React.memo(TodoItem);
