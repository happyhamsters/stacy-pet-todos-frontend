import classes from './todo.module.css';
import Checkbox from '../checkbox'
import CloseButton from '../closeButton';
import { useState } from 'react';


const Todo = ({ title, text, id, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false)

  return <div>
    <tr className={classes.todo}>
      <div className={classes.cardTitle}>
      <Checkbox isChecked={isDone} setIsChecked={setIsDone} />
      <td className={classes.title}>{title}</td>
      <CloseButton id={id} deleteTodo={deleteTodo}/>
      </div>
      <div className={classes.cardText}>
      <td className={classes.text}>{text}</td>
      </div>
    </tr>
  </div>;
}

export default Todo;
