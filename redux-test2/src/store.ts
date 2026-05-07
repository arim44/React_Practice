// store를 만들어 주는애 configureStore

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import userReducer from './userSlice'

export const store = configureStore({
    // 2개의 리듀서를 모음
    reducer:{
        counter: counterReducer,
        user: userReducer,
    },
});

// 타입 typeof store.getState 상태의 타입을 불러옴
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;