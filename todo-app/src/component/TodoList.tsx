import './TodoList.css'
import TodoItem from './TodoItem';
import type{ Todo } from '../App';
import { useState, type ChangeEvent } from 'react';

interface TodoListProps{
    todos: Todo[];
    onUpdate:(targetId:number) => void;
    onDelete:(targetId:number) => void;
}

function TodoList({todos, onUpdate, onDelete}:TodoListProps){
    // 검색어 입력
    const [search, setSearch] = useState('');

    // 체인지
    const onChangeSearch= (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    // 검색한 결과
    const getSearchResult= () => {
        //content에 들어있는 단어만 통과
        return search === ''? todos : todos.filter((todo) => 
            todo.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }
    
   
    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <input type="text"
                className="searchbar"
                placeholder="검색어를 입력하세요."
                onChange={onChangeSearch}
                />

            <div>
               {getSearchResult().map((todo) => 
                    <TodoItem todo={todo} key={todo.id} onUpdate={onUpdate} onDelete={onDelete} />
                )}
            </div>
        </div>
    );
}

export default TodoList;
