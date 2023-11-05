import Collection from '../collection'
import { useState, useEffect } from 'react';
import todosService from '../../services/todos'

function App() {
  const [newTitle, setnewTitle] = useState('')
  const [newText, setnewText] = useState('')

  const initialTodos = [
    {
        title: "Hello world!",
        text: "Hello world",
        isDone: false,
        id: "6538ae1536fc8391ff88176f"
    },
    {
        title: "new",
        text: "to",
        isDone: false,
        id: "653a254135d26f2360d45dec"
    }
]
const [todos, setTodos] = useState(initialTodos)


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
      setnewTitle('')
      setnewText('')
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
