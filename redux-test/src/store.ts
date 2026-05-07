import { createSlice, configureStore } from "@reduxjs/toolkit";

// 여기에 다 모아둠 slice.actions 안에 리듀서에 있는 것들이 들어감
const slice = createSlice({
    name: 'counter',
    initialState: {value:0},
    // 리듀서
    reducers: {
        increase: (state) => {
            state.value += 1;
        },
        decrease: (state) => {
            state.value -= 1;
        }
    }
});

export const {increase, decrease} = slice.actions;
// 밖에서 써야할꺼
export const store = configureStore({reducer:slice.reducer});