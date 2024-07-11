import { useState } from "react";

function EditTask(props) {
  const [editedTask, setEditedTask] = useState(props.task);
  const cancel = () => {
    props.setEditing((editing) => !editing);
  };
  const editComplete = () => {
    const Updatedlist = props.taskslist.map((value, id) => {
      return id === props.id ? editedTask : value;
    });
    props.setTaskslist(Updatedlist);
    props.setEditing((editing) => !editing);
  };
  return (
    <>
      <input
        value={editedTask}
        onChange={(e) => setEditedTask(e.target.value)}
      ></input>
      <button onClick={editComplete}>done</button>
      <button onClick={cancel}>cancel</button>
    </>
  );
}
export default EditTask;
