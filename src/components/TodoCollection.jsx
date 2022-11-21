import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  inputValue,
  onChange,
  onKeyDown,
  onAddTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoCollection;
