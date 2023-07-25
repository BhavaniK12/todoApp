import React from 'react'

export default function TodoList({ todos, setTodos, setEditTodo }) {

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo)=>todo.id === id);
    setEditTodo(findTodo);
  }
  const handleComplete = (todo) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    }))
  }
  return (<>
    <div>TodoList</div>
    {
      todos.map((todo) => (

        <li className='list-todo' key={todo.id} >
          <input type='text' value={todo.title} onChange={(e) => e.preventDefault()} />
          <br/>

          <div>
            <button className='btn btn-danger' onClick={() => handleDelete(todo)}>Delete</button> 
            
            <button className='btn btn-success' onClick={() => handleEdit(todo)}>Edit</button>
            <button  className='btn btn-primary' onClick={() => handleComplete(todo)}>complete</button>
          </div>
        </li>

      ))
    }

  </>

  )
}
