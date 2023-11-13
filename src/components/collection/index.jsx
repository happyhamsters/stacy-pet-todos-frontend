import classes from './collection.module.css';
import Todo from '../todo'
import AddButton from '../addButton';

const Collection = ({ todos, addTodo, deleteTodo, onUpdate}) => {

  return (
    <div className={classes.collection}>
      {todos.map(todo =>
        <Todo todo={todo}
          deleteTodo={() => {deleteTodo(todo.id)}}
          onUpdate={(newTodo) => {onUpdate(newTodo)}}
        />)}
      <AddButton addTodo={addTodo}></AddButton>
    </div>
  )
}

export default Collection;
