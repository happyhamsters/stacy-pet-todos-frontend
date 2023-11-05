import classes from './addButton.module.css';

const AddButton = ({addTodo}) => {
  return (
    <div className={classes.card}>
    <button className={classes.addButton} onClick={addTodo}> 
    </button>
    </div>
);

};

export default AddButton;
