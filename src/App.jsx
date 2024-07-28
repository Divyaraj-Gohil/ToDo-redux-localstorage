import { TodoList } from "./TodoList"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addTodo } from './redux/todoSlice.js'

function App() {
  const [input, setinput] = useState('')
  const dispatch = useDispatch()

  const onchange = (e) => {
    setinput(e.target.value)
  }
  const handlesubmit = (text) => {
    if (!input) return
    let id = nanoid()
    dispatch(addTodo({ id, text }))
    setinput('')
  }

  return (
    <><div className="bg-gradient-to-r from-blue-200 to-cyan-200 min-h-screen lg:w-[70%] w-full mx-auto  md:rounded-2xl">
      <h1 className="text-center font-bold text-5xl pt-5 text-[#a8142f] ">Todo-List</h1>
      <div className="flex mx-auto mt-8 my-5 md:px-20 lg:px-24 w-[70%]">
        <input type="text" required value={input} onChange={onchange} className="px-3 py-2 w-[80%] outline-none rounded-l-2xl bg-white " placeholder="Enter Todo..." />
        <button onClick={() => handlesubmit(input)} className="bg-[#59ed8a] w-[20%] md:font-semibold md:text-lg rounded-r-2xl">Add</button>
      </div>
      <TodoList />
    </div>
    </>
  )
}

export default App
