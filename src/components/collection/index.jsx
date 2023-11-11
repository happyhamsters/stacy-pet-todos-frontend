import classes from './collection.module.css';
import Todo from '../todo'
import AddButton from '../addButton';

const Collection = ({ todos, addTodo, deleteTodo}) => {

  return (
    <div className={classes.collection}>
      {todos.map(todo =>
        <Todo key={todo.id}
          title={todo.title}
          text={todo.text}
          deleteTodo={() => deleteTodo(todo.id)}
        />)}
      <AddButton addTodo={addTodo}></AddButton>
    </div>
  )
}

export default Collection;
