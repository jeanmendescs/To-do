import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask, completeTask, editTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            removeTask={removeTask}
            completeTask={completeTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
