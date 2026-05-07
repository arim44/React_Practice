import { useDispatch } from "react-redux"
import { increase } from "./store"

// 함수를 가져와야 함 유저 디스패치
export default function CounterA(){
   const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(increase())}>
                <h1>+</h1>
            </button>
            
        </div>
    )
}