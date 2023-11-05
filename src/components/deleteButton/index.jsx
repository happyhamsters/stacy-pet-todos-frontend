import classes from './deleteButton.module.css';

const DeleteButton = ({deleteTodo}) => {
  return (
    <button className={classes.deleteButton} onClick={deleteTodo}> 
    </button>
);
};

export default DeleteButton;
