import classes from './todo.module.css';
import Checkbox from '../checkbox'
import CrossButton from '../crossButton';
import SaveButton from '../saveButton';
import { useState } from 'react';
import { TextField } from '@mui/material';


const Todo = ({ todo, deleteTodo, onUpdate }) => {
  console.log("todo", todo);
  const { id, title, text, isDone } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [editHeading, setEditHeading] = useState(title);
  const [editText, setEditText] = useState(text);

  const handleHeadingChange = (e) => {
    setEditHeading(e.target.value);
  };
  const handleTextChange = (e) => {
    setEditText(e.target.value);
  };
  const handleSave = () => {
    onUpdate({ id: id, title: editHeading, text: editText, isDone: isDone });
    setIsEditing(false);
  };
  const hadleCrossClick = () => {
    if (!isEditing) (
      deleteTodo()
    )
    else {
      setIsEditing(false);
      setEditHeading(title);
      setEditText(text)
    }
  }
  const handleCheckboxClick = () => {
    onUpdate({ ...todo, isDone: !isDone })
  }

return (
  <div className={classes.todo}>
    {!isEditing ? (
      <>
        <div className={classes.cardTitle}>
          <Checkbox isChecked={isDone} onClick={handleCheckboxClick} />
          <p className={classes.title} onClick={() => { setIsEditing(true); }}>{title}</p>
          <CrossButton onClick={hadleCrossClick} />
        </div>
        <div className={classes.cardText}>
          <p onClick={() => { setIsEditing(true); }} className={classes.text}>{text}</p>
        </div>
      </>
    ) : (
      <>
        <div className={classes.cardTitle}>
          <SaveButton saveButton={handleSave} />
          <TextField className={classes.headingOnEdit} value={editHeading} onChange={handleHeadingChange} />
          <CrossButton onClick={hadleCrossClick} />
        </div>
        <div className={classes.cardText}>
          <TextField multiline value={editText} onChange={handleTextChange} />
        </div>
      </>
    )}
  </div>)
}

export default Todo;
