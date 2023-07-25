import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';

export default function App() {
  const [input,setInput]=useState('');
  const [todos,setTodos]= useState([]);
  const [editTodo,setEditTodo]=useState(null);
  return (
    <>
    <div>App</div>
    <div>
      <Form input={input} setInput={setInput}  todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>

      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
    </div>
    </>
  )
}
