import classes from './checkbox.module.css';

const Checkbox = ({isChecked, onClick}) => {
  const handleChange = () => {
    onClick();
  };
  return (
    <div className={classes.checkbox}>
      <input
        className={classes.icon}
        checked={isChecked}
        onChange={handleChange}
        type="checkbox"
      />
    </div>
  );
};

export default Checkbox;
