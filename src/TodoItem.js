const TodoItem = (props) => {
  const { title, id} = props
    return(
        
      <div className="todo-item">
        <span>{title}</span>
        <button>X</button>
      </div>
        
    );
}
export default TodoItem