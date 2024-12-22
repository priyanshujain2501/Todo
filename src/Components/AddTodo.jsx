import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

//useDispatch hook in React-Redux is a simple way to trigger actions that update the global state managed by Redux.

// useDispatch is used to send actions from your React components to the Redux store. Actions are like messages that tell Redux to make changes to the state.



function AddTodo(){

    const [input,setInput] = useState(' ')
    const dispatch = useDispatch()
    

    //e.preventDefault() -> In a web form, when you submit it, the browser normally refreshes the page. This line stops that from happening. It prevents the page from reloading so that you can handle the form submission with JavaScript instead.

    //Without e.preventDefault(): The form would submit and the page would reload, possibly causing the user to lose their progress or interrupting the user experience.

    //With e.preventDefault(): The page doesn't reload, and you can control what happens next, such as displaying a success message, clearing the form, or updating the UI.

    //dispatch(addTodo(input)) -> This line sends a message (an "action") to the Redux store to add a new to-do item. The "input" is the text that the user typed into the input field.

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return(
        //onSubmit={addTodoHandler} -> This attribute sets up an event listener. When the form is submitted (when the user presses the Enter key or clicks the submit button), the addTodoHandler function is called. This function handles what happens next, like adding the new to-do to the list.

        //<input type="text"> -> This is a text input field where users can type in their to-do item.

        //focus:border-indigo-500: Changes the border color to indigo when the input field is focused (when the user clicks on it or starts typing).

        //focus: ring-2 focus: ring - indigo - 900: Adds a subtle indigo ring around the input field when focused, giving it a glowing effect.

        //leading-8: Sets the line height to make the text inside the input more spacious.

        //transition-colors duration-200 ease-in-out: Smoothly transitions the input's border and background colors when interacting with it.

        // value = { input }: Binds the value of the input field to a piece of state called input.This means whatever the user types will be stored in the input state.

        //onChange={(e) => setInput(e.target.value)}: This handles changes in the input field. Every time the user types something, this function updates the input state with the new value. The e.target.value represents the current text in the input field.

        <form onSubmit={addTodoHandler}
        className='space-x-3 mt-12'>
            <input 
            type="text"
            className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Enter a Todo...'
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            />
            <button 
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Add Todo
            </button>
        </form>
    )
}

//Form: Wraps the input field and button. Submitting this form triggers the addTodoHandler function.

//Input Field: Where the user types the new to -do.It updates the input state with every keystroke.

//Button: When clicked, it submits the form, triggering the addTodoHandler, which adds the new to -do to the list.

export default AddTodo;