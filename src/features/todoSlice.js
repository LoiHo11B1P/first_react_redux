import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    item: ['test']
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log()
            
            return { item: [...state.item,action.payload]}
        },
        clearTodo: (state) => {
            return { item: []}
        },
        removeTodo: (state, action) => {
            let index = state.item.indexOf(action.payload)
            let newTodoList = state.item.slice(0, index)

            return { item:  newTodoList}
        }
    }
})

export const { addTodo, clearTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer