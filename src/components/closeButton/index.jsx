import classes from './deleteButton.module.css';

const DeleteButton = ({id, deleteTodo}) => {
  return (
    <button className={classes.deleteButton} onClick={() => deleteTodo(id)}> 
    </button>
);

};

export default DeleteButton;
