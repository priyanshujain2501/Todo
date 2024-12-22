import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './App/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  //The <Provider> component is a special component provided by the react-redux library. It makes the Redux store available to all components in our React application that are wrapped inside it, without having to pass the store manually as a prop to each component.

  //Provider: It injects the Redux store into the React application, allowing any component inside App (and its children) to interact with the store using Redux hooks (e.g., useSelector to read state, useDispatch to dispatch actions) or the connect function (a higher-order component used with class components).

  //Purpose: The primary purpose of <Provider> is to make the Redux store accessible to the entire component tree. Any component nested inside the <Provider> can connect to the Redux store using connect, useSelector, or useDispatch.

  //useSelector is a hook that lets you access the Redux state within a functional component. It takes a selector function as its argument and returns the part of the state that you want.

  //Example: const user = useSelector((state) => state.user);
  //const counter = useSelector((state) => state.counter);


  //useDispatch is a hook that provides access to the Redux dispatch function. This function allows you to send actions to the Redux store, which in turn triggers state changes according to the reducers.


  //Store Prop: The store prop is where you pass the Redux store that you have created using createStore.This store holds the entire state of your application.

  <Provider store={store}>
    <App />
  </Provider>
)
