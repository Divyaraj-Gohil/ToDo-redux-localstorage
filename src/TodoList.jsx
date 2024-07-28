import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from './redux/todoSlice.js'

export const TodoList = () => {
    const [update, setupdate] = useState(-1)
    const [input, setinput] = useState(null)
    const todos = useSelector((state) => state.todos)
    //const todos = JSON.parse(getodos)
    const dispatch = useDispatch()

    const updatebtn = (id, text) => {
        if (text === null) return
        dispatch(updateTodo({ id, text }))
        setupdate(-1)
        setinput(null)
    }
    const onchange = (e) => {
        setinput(e.target.value)
    }

    return (
        <>
            <div className='w-full lg:w-[80%] flex flex-col mx-auto gap-3'>
                {todos.map((todo) => {
                    return update === todo.id ? (
                        <li className='flex mx-8 md:mx-40 gap-3 px-3 py-2 bg-white justify-between font-bold rounded-xl break-words' key={todo.id}>
                            <input type='text' className='w-[70%] px-1 py-1 outline-none rounded-xl '
                                defaultValue={todo.text}
                                onChange={onchange} />
                            <div className='flex justify-between gap-2'>
                                <button className='font-bold' onClick={() => updatebtn(update, input)}> <img className='w-[25px]' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" /> </button>
                                <button onClick={() => setupdate(-1)}>cancel</button>
                            </div>
                        </li>
                    ) : (
                        <li className='flex mx-8 md:mx-40 gap-3 px-3 py-2 bg-white justify-between font-bold rounded-xl break-words'
                            key={todo.id}><p>{todo.text}</p>
                            <div className='flex justify-between gap-2'>
                                <button onClick={() => setupdate(todo.id)}> <img className='w-[25px]' src="https://img.icons8.com/?size=100&id=86374&format=png&color=000000" /> </button>
                                <button onClick={() => dispatch(removeTodo(todo.id))}><img className='w-[25px]' src='https://img.icons8.com/?size=100&id=99961&format=png&color=000000' /></button>
                            </div>
                        </li>)
                })

                }
            </div>
        </>
    )
}
