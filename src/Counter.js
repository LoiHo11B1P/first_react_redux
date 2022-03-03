import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counterSlice'
import { addTodo, clearTodo, removeTodo } from './features/todoSlice'

const Counter = () => {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.counter.value)
    // And include the useDispatch hook...
    const dispatch = useDispatch()

    const todoList = useSelector((state) => state.todo.item).map(item => {
            return (
                <li key={item}>{item} <button onClick={() => {dispatch(removeTodo(item))}}>Remove</button></li>
            )
        }
    )

   

    const addTodoItem = () => {
        const todoItem = document.getElementById('newTodoItem').value
        dispatch(addTodo(todoItem))
    }

    const clearTodoList = () => {
        dispatch(clearTodo())
    }


    return (
        <div>
            <h1>
                Counter: {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <div>
                <input></input>
                <button >Submit</button>
            </div>
            <div>
                <input id="newTodoItem" />
                <button onClick={addTodoItem}>Submit</button>
            </div>
            <div>
                <button onClick={clearTodoList}>Clear To Do</button>
                <h2>To Do List</h2>
                <ul>
                    {todoList}
                </ul>
            </div>
        </div>
    )
}

export default Counter