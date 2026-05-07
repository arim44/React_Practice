import { useDispatch, useSelector } from "react-redux"
import { increase, decrease } from "./counterSlice";
import { changeName } from "./userSlice";
import DisPlayCounter from "./displayCounter";
import DisPlayName from "./displayName";

// 보여줄꺼 카운터, 네임 유저셀렉터로 상태 가져옴
// 함수를 가져와야 함 유저 디스패치
export default function Counter(){
    // const count = useSelector((state:RootState)=> state.counter.value);
    // const name = useSelector((state:RootState) => state.user.name);

   const dispatch = useDispatch();

    return(
        <div>
            <DisPlayName />
            <DisPlayCounter />
            <button onClick={()=>dispatch(increase())}>
                <h1>+</h1>
            </button>
            <button onClick={()=>dispatch(decrease())}>
                <h1>-</h1>
            </button>
            <button onClick={()=>dispatch(changeName('김연아'))}>
                이름변경
            </button>
            <button onClick={()=>dispatch(changeName('차은우'))}>
                이름변경
            </button>
            
        </div>
    )
}