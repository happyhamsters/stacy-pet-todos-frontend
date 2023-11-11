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

  const newTodo = { }

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

  return <div>
    <Collection todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} /></div>;

}

export default App;
