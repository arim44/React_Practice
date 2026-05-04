import './TodoList.css'
import TodoItem from './TodoItem';
import type{ Todo } from '../App';
import { useState, type ChangeEvent } from 'react';

interface TodoListProps{
    todos: Todo[];
    onUpdate:(targetId:number) => void;
    onDelete:(targetId:number) => void;
}

// TodoList(todos, 체크여부함수, 삭제함수 받음)
function TodoList({todos, onUpdate, onDelete}:TodoListProps){
    // 검색어 입력
    const [search, setSearch] = useState('');

    // 검색 변경
    const onChangeSearch= (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    // 검색한 결과
    const getSearchResult= () => {
        // 검색어가 content에 들어있는 단어만 가져옴( '' 안의 내용이 없으면 그냥 todos반환
        // 있으면 todo의 내용을 검색어와 비교해서 필터로 걸러서 가져온거 반환)
        return search === ''? todos : todos.filter((todo) => 
            // 내용(소문자로 변경).검색어도(소문자로 변경)
            todo.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }
    
   
    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <input type="text"
                className="searchbar"
                placeholder="검색어를 입력하세요."
                onChange={onChangeSearch}
                value={search}
                />
            {/* 추가되는 투두아이템 */}
            <div>
                {/* geSearchResult() 렌더마다 실행됨 나중에 useMemo 사용 */}
               {getSearchResult().map((todo) => 
                    <TodoItem todo={todo} key={todo.id} onUpdate={onUpdate} onDelete={onDelete} />
                )}
            </div>
        </div>
    );
}

export default TodoList;
