import './TodoItem.css'
import type { Todo } from '../App';
import type React from 'react';


// todo를 한개, 체크업데이트, 삭제 받음
interface TodoItemProps {
    todo: Todo;
    onUpdate: (targetId: number) => void;
    onDelete: (targetId: number) => void;
}

function TodoItem({ todo, onUpdate, onDelete}: TodoItemProps) {
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

export default TodoItem;
