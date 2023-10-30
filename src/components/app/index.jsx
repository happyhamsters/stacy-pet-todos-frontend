import classes from './app.module.css';
import Checkbox from '../checkbox';
import { useState } from 'react';


function App() {
  const [isDone, setIsDone] = useState(false)

  return <div className={classes.app}>Hello world!
    <Checkbox isChecked={isDone} setIsChecked={setIsDone} />
  </div>;
}

export default App;
