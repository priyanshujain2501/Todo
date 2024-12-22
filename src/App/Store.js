import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

//What It Is: configureStore is a function provided by Redux Toolkit that simplifies the process of setting up a Redux store. It comes with good default settings that include built-in middleware, such as Redux Thunk for handling asynchronous logic, and integration with the Redux DevTools extension.

//Why Use It: configureStore is the recommended way to create a store in modern Redux applications because it reduces boilerplate code and provides sensible defaults.


//In Redux, a reducer is a pure function that takes the current state and an action as arguments and returns a new state. The todoReducer manages the state slice related to "todos" in your application.

//reducer: todoReducer: This line tells the Redux store to use the todoReducer to manage the application's state. Since only one reducer is provided here, the entire state of the Redux store will be managed by this single reducer.

//Single Reducer: In this case, the store's state will directly correspond to the state managed by todoReducer.

export const store = configureStore({
    reducer: todoReducer    
})

