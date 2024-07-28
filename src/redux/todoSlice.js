import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: JSON.parse(localStorage.getItem('todo'))
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = {
                id: id,
                text: text
            }
            state.todos.push(todo)
            localStorage.setItem("todo", JSON.stringify(state.todos))
            console.log(localStorage.getItem('todo'))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem("todo", JSON.stringify(state.todos))
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) todo.text = text
                return todo
            })
            localStorage.setItem("todo", JSON.stringify(state.todos))
        }
    }
})
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer