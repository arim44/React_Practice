//컨텍스트 생성
// 여기에 들어가는 값은 타입 onCreate, todos, onUpdate, onDelelte
// 범위는 에디터랑 리스트만 영향 받음

import { createContext } from "react";
import type { Todo } from "../App";

// interface TodoContextType{
//     todos:Todo[];
//     onCreate:(content:string) => void;
//     onUpdate:(targetId:number) => void;
//     onDelete:(targetId:number) => void;
// }

// const TodoContext = createContext<TodoContextType>({
//     //초기값
//     todos:[],
//     onCreate:(content:string) => {},
//     onUpdate:(targetId:number) => {},
//     onDelete:(targetId:number) => {},
// })

// export default TodoContext;

//컨텍스트 2개로 분리
interface TodoStateContextType {
    todos: Todo[];
}

export const TodoStateContext = createContext<TodoStateContextType>(
    { todos: [] }
);

interface TodoDispatchContextType {
    onCreate: (content: string) => void;
    onUpdate: (targetId: number) => void;
    onDelete: (targetId: number) => void;
}

export const TodoDispatchContext = createContext<TodoDispatchContextType>({
    onCreate: (content: string) => {},
    onUpdate: (targetId: number) => {},
    onDelete: (targetId: number) => {},
});