import classes from './crossButton.module.css';

const CrossButton = ({onClick}) => {
  return (
    <button className={classes.deleteButton} onClick={onClick}> 
    </button>
);
};

export default CrossButton;
