import classes from './checkbox.module.css';
import { useState } from 'react';

const Checkbox = () => {
  const [value, setValue] = useState(false)
  const handleChange = () => {
    setValue(!value)
  }
  return <div> 
    <input className={classes.checkbox}
    value={value}
    onChange={handleChange}
    type="checkbox"/></div>;
}

export default Checkbox;