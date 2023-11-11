import classes from './todo.module.css';
import Checkbox from '../checkbox'
import DeleteButton from '../deleteButton';
import { useState } from 'react';


const Todo = ({ title, text, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false)

  return (
    <div className={classes.todo}>
      <div className={classes.cardTitle}>
        <Checkbox isChecked={isDone} setIsChecked={setIsDone} />
        <span className={classes.title}>{title}</span>
        <DeleteButton deleteTodo={deleteTodo} />
      </div>
      <div className={classes.cardText}>
        <p className={classes.text}>{text}</p>
      </div>
    </div>)
}

export default Todo;
