
import { act } from "react";
import { INCREASE, DECREASE, type Action } from "./action";

// 카운터
export type State = {
    value: number;
}

// 리듀스
export default function reducer(state: State = { value: 0 }, action: Action) {
    switch(action.type){
        case INCREASE:
            return {...state, value:state.value+1};
        case DECREASE:
            return{...state, value:state.value-1};
        default:
            return state;
    }
}