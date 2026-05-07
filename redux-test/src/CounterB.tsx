
import { useDispatch } from "react-redux"
import { decrease } from "./action"

// 함수를 가져와야 함 유저 디스패치
export default function CounterB(){
   const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(decrease())}>
                <h1>-</h1>
            </button>
            
        </div>
    )
}