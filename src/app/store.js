import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/taskSlice';
import authReducer from "../features/Auth/authSlice";

export const store= configureStore({
    reducer: {
        todo: todoReducer,
        auth: authReducer 
    }
});