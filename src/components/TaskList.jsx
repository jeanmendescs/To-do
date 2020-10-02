import React, { useState } from "react";
import { connect } from "react-redux";
import { removeTask, completeTask, editTask } from "../redux/actions";
import "./style.css";

const TaskList = ({ tasks, removeTask, completeTask, editTask }) => {
  const [showField, setShowField] = useState(false);
  const [renameTask, setRenameTask] = useState("");

  const renderTasks = () =>
    tasks.map((task) => {
      const conditionalRender =
        task.isCompleted === true ? "strikethrough" : "";
      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          editTask(task.id, renameTask);
          setShowField(!showField);
        }
      };
      return (
        <div key={task.id}>
          <div className={conditionalRender}>
            {!showField ? (
              <li onClick={() => setShowField(!showField)}>
                {`Task: ${task.title}`}{" "}
              </li>
            ) : (
              <React.Fragment>
                <span onClick={() => setShowField(!showField)}>Task:</span>
                <input
                  className="editTaskInput"
                  id="editTaskInput"
                  value={renameTask}
                  onChange={(e) => setRenameTask(e.target.value)}
                  type="text"
                  onKeyDown={handleKeyDown}
                />
              </React.Fragment>
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
