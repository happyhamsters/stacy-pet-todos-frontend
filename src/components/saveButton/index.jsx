import classes from './saveButton.module.css';

const SaveButton = ({saveButton}) => {
  return (
    <div className={classes.card}>
    <button className={classes.saveButton} onClick={saveButton}> 
    </button>
    </div>
);

};

export default SaveButton;
