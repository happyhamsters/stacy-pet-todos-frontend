import classes from './collection.module.css';
import Todo from '../todo'
import { useState } from 'react';

const Collection = ({ initialTodos }) => {

const [todos, setTodos] = useState(initialTodos)

const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div className={classes.collection} style={{display:'flex'}}>
      {todos.map(todo =>
        <Todo key={todo.id}
          title={todo.title}
          text={todo.text}
          deleteTodo={deleteTodo}
        />)}
    </div>
  )
}

export default Collection;
