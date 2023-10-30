import classes from './checkbox.module.css';

const Checkbox = ({isChecked, setIsChecked}) => {
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={classes.checkbox}>
      <input
        className={classes.icon}
        value={isChecked}
        onChange={handleChange}
        type="checkbox"
      />
    </div>
  );
};

export default Checkbox;
