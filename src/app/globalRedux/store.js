'use client';

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export const RootState = typeof store.getState
export const AppDispatch = typeof store.dispatch