import TodoForm from "./TodoForm";
import TodoListContainer from "./TodoListContainer";
import { useState } from "react";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([])
  console.log(todoList);


  // let todoList = []

  
  return (
    <div className="todo-app">
      <h1 className="tittle">TodoApp</h1>
      <TodoForm setList={setTodoList} />
      <TodoListContainer list = {todoList} />

      <div className="clear-all">
        <p>4 pending task</p>
        <button>clear all</button>
      </div>
    </div>
  );
};
export default TodoApp;
