import { configureStore } from "@reduxjs/toolkit";
import userFormReducer from "../features/userForm/userFormSlice"

export const store = configureStore({

    reducer: {
        userForm: userFormReducer
    }

})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>