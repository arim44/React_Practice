
import { act, useCallback, useMemo, useRef, useState } from 'react'
import './App.css'
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'

//리듀스
import { useReducer } from "react";
// import TodoContext from './component/TodoContext'
import { TodoStateContext } from './component/TodoContext'
import { TodoDispatchContext } from './component/TodoContext'

// 테스트 목업 데이타
const mockTdos = [
  {
    id: 0,
    isDone: false,
    content: "JavaScript 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "AI 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
]

// 타입 지정
export interface Todo {
  id: number;
  isDone: boolean;
  content: string;
  createDate: number;
}

// 리듀스) 스테이트 바꾸는 로직
// (액션)
type Action =
  | { type: 'CREATE', newItem: Todo }
  | { type: 'UPDATE', targetId: number }
  | { type: 'DELETE', targetId: number };

// (함수)상태를 새로 받아서 조작하고 다시 상태를 내놓음
function reducer(todos: Todo[], action: Action) {
  let result;

  switch (action.type) {
    case 'CREATE': {
      result = [action.newItem, ...todos];
      break;
    }
    case 'UPDATE': {
      result = todos.map((todo) =>
        //검사
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
      break;
    }
    case 'DELETE': {
      result = todos.filter((todo) => todo.id !== action.targetId);
      break;
    }
    default:
      result = todos;
  }
  // 결과 리턴하기 전에 로컬에 저장
  // localStorage.setItem(key, value) 현재 Result 객체 어레이임 저장은 직렬화시켜야함
  // 제이슨으로 바꿔서 저장 JSON.stringify(바꿀꺼 결과)
  localStorage.setItem('todos', JSON.stringify(result));
  return result;
}


function App() {
  // 초기값을 읽어온값으로 넣어야 함
  const stored = localStorage.getItem('todos');
  const initTodos: Todo[] = stored ? JSON.parse(stored) : [];

  const [todos, dispatch] = useReducer(reducer, initTodos);
  // 저장된거 로드 ?? 널이면 1반환
  const initId = Number(localStorage.getItem('todoId') ?? 1) ;
  //새로운 아이템을 만들고 셋투두스에서 추가 아이디를 새로운애한테 부여해야함 useRef
  // 초기값은 initId 숫자로
  const idRef = useRef(initId);

  const onCreate = useCallback((content: string) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      //만들어 질때 로컬날짜
      createDate: new Date().getTime(),
    }
    // newItem에 기존에 있는 todos를 펼침
    // setTodos([newItem, ...todos])
    dispatch({ type: 'CREATE', newItem })
    idRef.current += 1;

    //저장
    localStorage.setItem('todoId', JSON.stringify(idRef.current));
  }, [])

  // 체크 수정(아이디를 넘겨받음)
  const onUpdate = useCallback((targetId: number) => {
    // id 같은지 체크해서 같으면 토글, setTodos해줘야 다시 그림 
    // setTodos(
    //   todos.map((todo) =>
    //     //검사
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    //   ), // 반환은 todo배열임
    // );
    dispatch({ type: 'UPDATE', targetId });
  }, [])

  //삭제
  const onDelete = useCallback((targetId: number) => {
    //필터로 아닌것만 골라서 개만 폴스로 만들어줌
    // setTodos(todos.filter((todo) => todo.id !== targetId));
    dispatch({ type: 'DELETE', targetId });
  }, [])

  // [] 의존성 배열
  const dispatches = useMemo(
    // 객체 {onCreate, onUpdate, onDelete} 이렇게 생김
    () => ({ onCreate, onUpdate, onDelete }), [onCreate, onUpdate, onDelete])

  return (
    <div className='App'>
      <Header />
      {/* 범위는 헤더 빼고 밸류 객체 4개 */}
      {/* todo 변경시 다 같이 변경되므로 컨텍스트 나누기 */}
      <TodoStateContext.Provider value={{ todos }}>
        <TodoDispatchContext value={dispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext>
      </TodoStateContext.Provider>


      {/* // <div className='App'>
    //   <Header />
    //   {/* 밸류 객체 4개 */}
      {/* //   <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}>
    //   <TodoEditor onCreate={onCreate} />
    //   <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    //   </TodoContext.Provider>  */}
    </div>
  )
}

export default App



// import { act, useCallback, useMemo, useRef, useState } from 'react'
// import './App.css'
// import Header from './component/Header'
// import TodoEditor from './component/TodoEditor'
// import TodoList from './component/TodoList'

// //리듀스
// import { useReducer } from "react";
// // import TodoContext from './component/TodoContext'
// import { TodoStateContext } from './component/TodoContext'
// import { TodoDispatchContext } from './component/TodoContext'

// // 테스트 목업 데이타
// const mockTdos = [
//   {
//     id: 0,
//     isDone: false,
//     content: "JavaScript 공부하기",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "AI 공부하기",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "React 공부하기",
//     createDate: new Date().getTime(),
//   },
// ]

// // 타입 지정
// export interface Todo {
//   id: number;
//   isDone: boolean;
//   content: string;
//   createDate: number;
// }

// // 리듀스) 스테이트 바꾸는 로직
// // (액션)
// type Action =
//   | { type: 'CREATE', newItem: Todo }
//   | { type: 'UPDATE', targetId: number }
//   | { type: 'DELETE', targetId: number };

// // (함수)상태를 새로 받아서 조작하고 다시 상태를 내놓음
// function reducer(todos: Todo[], action: Action) {
//   switch (action.type) {
//     case 'CREATE': {
//       return [action.newItem, ...todos];
//     }
//     case 'UPDATE': {
//       return todos.map((todo) =>
//         //검사
//         todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
//       );
//     }
//     case 'DELETE': {
//       return todos.filter((todo) => todo.id !== action.targetId);
//     }
//     default:
//       return todos;
//   }
// }


// function App() {
//   // const [todos, setTodos] = useState<Todo[]>(mockTdos);
//   //
//   const [todos, dispatch] = useReducer(reducer, mockTdos);

//   //새로운 아이템을 만들고 셋투두스에서 추가 아이디를 새로운애한테 부여해야함 useRef
//   // 현재로선 시작점 3임
//   const idRef = useRef(3);

//   const onCreate = useCallback((content: string) => {
//     const newItem = {
//       id: idRef.current,
//       content,
//       isDone: false,
//       //만들어 질때 로컬날짜
//       createDate: new Date().getTime(),
//     }
//     // newItem에 기존에 있는 todos를 펼침
//     // setTodos([newItem, ...todos])
//     dispatch({ type: 'CREATE', newItem })
//     idRef.current += 1;
//   }, [])

//   // 체크 수정(아이디를 넘겨받음)
//   const onUpdate = useCallback((targetId: number) => {
//     // id 같은지 체크해서 같으면 토글, setTodos해줘야 다시 그림 
//     // setTodos(
//     //   todos.map((todo) =>
//     //     //검사
//     //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
//     //   ), // 반환은 todo배열임
//     // );
//     dispatch({ type: 'UPDATE', targetId });
//   }, [])

//   //삭제
//   const onDelete = useCallback((targetId: number) => {
//     //필터로 아닌것만 골라서 개만 폴스로 만들어줌
//     // setTodos(todos.filter((todo) => todo.id !== targetId));
//     dispatch({ type: 'DELETE', targetId });
//   }, [])

//   // [] 의존성 배열
//   const dispatches = useMemo(
//     // 객체 {onCreate, onUpdate, onDelete} 이렇게 생김
//     ()=> ({onCreate, onUpdate, onDelete}),[onCreate, onUpdate, onDelete])

//   return (
//     <div className='App'>
//       <Header />
//       {/* 범위는 헤더 빼고 밸류 객체 4개 */}
//       {/* todo 변경시 다 같이 변경되므로 컨텍스트 나누기 */}
//       <TodoStateContext.Provider value={{ todos }}>
//         <TodoDispatchContext value={dispatches}>
//           <TodoEditor />
//           <TodoList />
//         </TodoDispatchContext>
//       </TodoStateContext.Provider>


//       {/* // <div className='App'>
//     //   <Header />
//     //   {/* 밸류 객체 4개 */}
//       {/* //   <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}>
//     //   <TodoEditor onCreate={onCreate} />
//     //   <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
//     //   </TodoContext.Provider>  */}
//     </div>
//   )
// }

// export default App
