import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { activityList, addTodo, todoList } from '../src/app/todo/todoSlice'
import TodoElement from './components/TodoElement'
import './App.css';

function App() {
  const [todo, setTodo] = useState<string>('')

  const dispatch = useAppDispatch()
  const historylist = useAppSelector(activityList)
  const list = useAppSelector(todoList)

  const onAddTodo = (value: string) => {
    dispatch(addTodo(value))
    setTodo('')
  }

  return (
    <div className='App'>
       <span className="App">
         
       <div>
        <label className="heading">

         <span><h1>Front-end Devleoper Testting</h1> </span> 
          <span> <h2> Cheddo technogy Co.Ltd</h2></span>

        </label>

         
        <input className="input" value={todo} onChange={(e) => setTodo(e.target.value)} />
        {todo.length > 0 && <span>Typing...</span>}
        <button className="input_submit" disabled={todo.length <= 0} onClick={() => onAddTodo(todo)}>
          Add
        </button>
        <div className="todos">

        <span className="todos__heading">Todolist</span>
        {list &&
          list.length > 0 &&
          list.map((item) => (
            <TodoElement id={item.id} name={item.name} key={item.id} />
          ))}

           </div>
        <div className="todos remove">
        <span className="todos__heading">ActivityList</span>

        {historylist.length > 0 &&
          historylist.map((item, index) => (
            <div
              key={`activity-${index}`}
            >{`${item.activity} ${item.name}`}</div>
          ))}
            </div>
      </div>

       </span>
      
    </div>
  )
}

export default App
