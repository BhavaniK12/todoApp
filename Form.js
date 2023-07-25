import React, { useEffect } from 'react'
import { v4 as uuiidv4 } from 'uuid'

export default function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
  const updateTodo = (title, id, complete) => {
    const newTodo = todos.map((todo) => {
      return todo.id === id ? { title, id, complete } : todo
    })
    setTodos(newTodo);
    setEditTodo('');
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo])
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuiidv4(), title: input, complete: false }])
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.complete)
    }

    console.log(input, todos);
  }

  const onChangeInput = (e) => {
    setInput(e.target.value);

  }
  return (<>
    <div>Form

      <div className='container'>
        <form onSubmit={onFormSubmit}>
          <input type='text' placeholder='Enter a todo' required onChange={onChangeInput} value={input}
          />
          <button className='btn btn-danger' type='submit'>Add</button>
        </form>
      </div>
    </div>
  </>)
}
