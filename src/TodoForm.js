import { useState } from "react";
const TodoForm = (props) => {
  // const [task , setTask] =useState("")
  // console.log(props)

  const { setList } = props;
  // console.log(setList)

  const onSubmit = (event) => {
    event.preventDefault();
    const getTask = event.target.inputTask.value;
    setTodoList((prevState) => {
      const newTodoList = [...prevState];
      newTodoList.push({
        title: getTask,
        id: newTodoList.length + 1,
      });
      return newTodoList
    });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter your task"
        name="inputTask"
      />
      <button>Add todo</button>
    </form>
  );
};
export default TodoForm;
