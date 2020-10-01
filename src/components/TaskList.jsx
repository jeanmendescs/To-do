import React, { useState } from "react";
import { connect } from "react-redux";
import { removeTask, completeTask, editTask } from "../redux/actions";
import "./style.css";

const TaskList = ({ tasks, removeTask, completeTask, editTask }) => {
  const [showField, setShowField] = useState(true);
  const [renameTask, setRenameTask] = useState("");

  const renderTasks = () =>
    tasks.map((task) => {
      console.log(tasks);
      const conditionalRender =
        task.isCompleted === true ? "strikethrough" : "";
      return (
        <div key={task.id}>
          <div
            className={conditionalRender}
            onDoubleClick={() => setShowField(!showField)}
          >
            {!showField ? (
              <li>{`Task: ${task.title}`} </li>
            ) : (
              <label>
                {" "}
                Task:
                <input
                  value={renameTask}
                  onChange={(e) => setRenameTask(e.target.value)}
                  type="text"
                />
                <button onClick={() => editTask(task.id, renameTask)}>
                  Rename Task
                </button>
              </label>
            )}

            <li>{`Created at: ${task.startedAt}`}</li>
          </div>
          <button onClick={() => completeTask(task.id)}>Finish Task</button>
          <button onClick={() => removeTask(task.id)}>Remove Task</button>
        </div>
      );
    });
  return <ul>{renderTasks()}</ul>;
};

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (id) => {
      dispatch(removeTask(id));
    },
    completeTask: (id) => {
      dispatch(completeTask(id));
    },
    editTask: (id, title) => {
      dispatch(editTask({ id, title }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
