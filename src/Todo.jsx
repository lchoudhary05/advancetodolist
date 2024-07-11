import { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";

const Todo = () => {
  const [task, setTask] = useState();
  const [taskslist, setTaskslist] = useState([]);

  return (
    <>
      <h1>Plan your day here ⏲️</h1>
      <div className="main-div">
        <div className="central-div">
          <AddTask
            task={task}
            setTask={setTask}
            taskslist={taskslist}
            setTaskslist={setTaskslist}
          />

          <div>
            {taskslist.map((value, index) => {
              return (
                <div key={index} id={index}>
                  <Task
                    value={value}
                    id={index}
                    taskslist={taskslist}
                    setTaskslist={setTaskslist}
                    task={task}
                    setTask={setTask}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
