import classes from './todo.module.css';
import Checkbox from '../checkbox'
import CloseButton from '../closeButton';
import { useState } from 'react';


const Todo = ({ title, text, id, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false)

  return (
    <div className={classes.todo}>
      <div className={classes.cardTitle}>
        <Checkbox isChecked={isDone} setIsChecked={setIsDone} />
        <span className={classes.title}>{title}</span>
        <CloseButton id={id} deleteTodo={deleteTodo} />
      </div>
      <div className={classes.cardText}>
        <p className={classes.text}>{text}</p>
      </div>
    </div>)
}

export default Todo;
