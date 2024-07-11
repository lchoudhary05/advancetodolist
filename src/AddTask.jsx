const AddTask = (props) => {
  const addTask = (e) => {
    props.setTask(e.target.value);
  };
  const addToList = () => {
    props.setTaskslist((prev) => {
      return [...prev, props.task];
    });
    props.setTask("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter you task"
        value={props.task}
        onChange={addTask}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addToList();
          }
        }}
      ></input>
      <button onClick={addToList}>➕</button>
    </>
  );
};

export default AddTask;
