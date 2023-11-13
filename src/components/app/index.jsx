import Collection from '../collection'
import { useState, useEffect } from 'react';
import todosService from '../../services/todos'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    todosService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, [])

  const addTodo = (event) => {
    event.preventDefault()

    const newTodo = {title: '&nbsp'}

    todosService
      .create(newTodo)
      .then(returnedTodo => {
        setTodos(todos.concat(returnedTodo))
      })
  }

  const deleteTodo = (id) => {
    todosService
      .deleteTodo(id)
      .then(() => {
        setTodos((todos.filter(todo => todo.id !== id)))
      })
  }


  const updateTodo = (newTodo) => {
    todosService
      .update(newTodo.id, newTodo)
      .then(() => {
        setTodos(todos.map(todo => todo.id !== newTodo.id ? todo : newTodo))
      })
  }


  return <div>
    <Collection todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} onUpdate={updateTodo} /></div>;

}

export default App;
