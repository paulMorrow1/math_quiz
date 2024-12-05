import * as React from "react";

function App() {
  const [toDoList, setToDoList] = React.useState([]);
  const [taskInput, setTaskInput] = React.useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setToDoList((prevTasks) => [
      ...prevTasks,
      { task: e.target.elements.task.value, completed: false },
    ]);
    // e.target.reset();
  };

  const handleOnChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleOnClick = () => {
    setToDoList((prevTasks) => [
      ...prevTasks,
      {
        task: taskInput,
        completed: false,
      },
    ]);
    setTaskInput("");
  };

  const handleRemoveTask = ({ task }) => {
    const removeTasks = toDoList.filter((t) => {
      return task !== t.task;
    });
    setToDoList(removeTasks);
  };

  const completeTask = ({ task }) => {
    const updatedTasks = toDoList.map((t) => {
      if (t.task === task) {
        t.completed = !t.completed;
      }
      return t;
    });
    setToDoList(updatedTasks);
  };

  React.useEffect(() => {
    const greeting = "Welcome";
    console.log(greeting);
  }, []);

  return (
    <>
      <div>
        <h1>To-Do List using form</h1>
        <form onSubmit={handleOnSubmit}>
          <input name="task" type="text" placeholder="Add a task" />
          <button type="submit">Submit Task</button>
        </form>
        {toDoList.map(({ task, completed }) => (
          <div key={task}>
            <pre>Task is completed: {String(completed)}</pre>
            <input
              type="checkbox"
              checked={completed}
              onClick={() => completeTask({ task })}
            ></input>
            {task}
            <button type="button" onClick={() => handleRemoveTask({ task })}>
              x
            </button>
          </div>
        ))}
      </div>
      {/* <div>
        <h1>To-Do List using controlled component</h1>
        <input
          type="text"
          onChange={handleOnChange}
          value={taskInput}
          placeholder="Add a task"
        />
        <button onClick={handleOnClick}>Submit Task</button>
        {toDoList.map(({ task, completed }) => (
          <div key={task}>{task}</div>
        ))}
      </div> */}
    </>
  );
}

export default App;
