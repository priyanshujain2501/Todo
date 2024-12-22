import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

//useSelector is a hook that takes a function as an argument. This function receives the entire Redux state as its parameter, and you can use it to select or derive the specific piece of state that your component needs.

//useSelector automatically subscribes the component to the Redux store, so it will re - render whenever the selected part of the state changes.

//State Selection: In the example above, useSelector is used to extract myValue from the Redux store's state. The state is typically structured with reducers, so state.myReducer.myValue accesses the desired value.

//Component Re - rendering: The component will automatically re - render whenever myValue changes in the Redux store.

//<ul>: This is an unordered list HTML element. It is used to create a list of items (in this case, todo items).

//Here, list-none is a Tailwind CSS class that removes the default list-style (bullets or numbers) from the list items.

//The map() function returns a new array, where each item (in this case, each todo) is transformed into a JSX <li> element.

//{todos.map((todo) => (: This is a JavaScript expression inside JSX that iterates over the todos array using the map() function.

//The todo is an individual object from the todos array, and each todo object typically contains properties like id and text

//<li>: This is a list item HTML element. It's used to represent each todo item in the list.

//key={todo.id}: The key prop is required in React when rendering lists. It helps React identify which items have changed, been added, or removed, improving the performance of list rendering. Each todo should have a unique id that serves as its key.

//<button>: An HTML button element. It’s used to trigger an action, like removing a todo.

//onClick: An event handler that triggers when the button is clicked.


//() => dispatch(removeTodo(todo.id)): This is an arrow function that dispatches an action to remove the current todo from the Redux store. The removeTodo function is likely an action creator that accepts the id of the todo to be removed. dispatch sends this action to the Redux store.

// focus: outline - none: Removes the default outline that appears when the button is focused(clicked or tabbed to).

//<svg>: This is an SVG (Scalable Vector Graphics) element used to render vector-based icons. Here, it's used to display a trash can icon (commonly used to represent a delete action).

//xmlns='http://www.w3.org/2000/svg': This line declares that the elements within the <svg> tag belong to the SVG namespace. This is a standard declaration for SVG elements, ensuring that they are correctly interpreted by the browser or any XML processor.

//fill='none': Specifies that the icon should not have a fill color by default.

//viewBox="0 0 24 24": Defines the position and dimension of the SVG viewport. The icon is scaled to fit within a 24x24 pixel area.

// strokeWidth = { 1.5}: Sets the width of the stroke(outline) to 1.5 pixels.

//stroke="currentColor": Sets the stroke color to the current text color (in this case, white).

//When you see xmlns='http://www.w3.org/2000/svg' in an <svg> tag, it's saying, "Hey, everything inside this <svg> tag should be understood as SVG graphics." This helps the browser know how to correctly display the shapes, lines, and other graphics you define in the SVG.

//<path>: This element defines the shape of the SVG icon using a series of commands and parameters.

//strokeLinecap='round': Makes the ends of lines in the icon rounded.

// strokeLinejoin = 'round': Makes the corners of the lines in the icon rounded.

//d='...': The d attribute contains a long string of commands and parameters that define the shape and lines of the icon. This is the actual drawing of the trash can icon.


function Todos() {
    //todos holds an array
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()

    return (
        <>
        <ul className='list-none'>
            {todos.map((todo) => (
                <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
                key={todo.id}
                >
                    <div className='text-white'>{todo.text}    
                    </div>
                    <button
                    onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                    >
                        <svg 
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox = "0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className='w-6 h-6'
                        >
                           <path 
                           strokeLinecap='round'
                           strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                           />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todos;