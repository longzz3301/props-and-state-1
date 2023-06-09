import TodoItem from "./TodoItem";
const TodoListContainer = (props) => {
  const {list} = props
  // console.log(list)
  return (
    <div className="todo-container">
        {list.map((item) => (<TodoItem title={item.title} id ={item.id} />))}
     
    </div>
  );
};
export default TodoListContainer