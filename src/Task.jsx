import { useState } from "react";
import EditTask from "./EditTask";

const Task = (props) => {
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);
  const editTask = () => {
    setEditing(!editing);
  };
  const deleteTask = () => {
    const result = window.confirm("Are you sure");
    const updatedTaskslist = props.taskslist.filter((_, id) => id !== props.id);

    result
      ? props.setTaskslist(updatedTaskslist)
      : props.setTaskslist((e) => e);
  };
  const doneTask = () => {
    setCompleted(!completed);
  };
  if (editing) {
    return (
      <EditTask
        editing={editing}
        setEditing={setEditing}
        task={props.value}
        id={props.id}
        taskslist={props.taskslist}
        setTaskslist={props.setTaskslist}
        setTask={props.setTask}
      />
    );
  } else
    return (
      <>
        <div style={{ textDecoration: completed ? "line-through" : "none" }}>
          <input type="checkbox" onClick={doneTask}></input>
          <span> {props.value}</span>
          {!completed && <button onClick={() => editTask()}>edit✏️</button>}
          {!completed && <button onClick={deleteTask}>delete</button>}
        </div>
      </>
    );
};

export default Task;
