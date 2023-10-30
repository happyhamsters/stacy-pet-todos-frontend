import classes from './checkbox.module.css';
import { useState } from 'react';

const Checkbox = () => {
  const [value, setValue] = useState(false);
  const handleChange = () => {
    setValue(!value);
  };
  return (
    <div className={classes.checkbox}>
      <input
        className={classes.icon}
        value={value}
        onChange={handleChange}
        type="checkbox"
      />
    </div>
  );
};

export default Checkbox;
