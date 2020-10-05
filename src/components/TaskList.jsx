import React, { useState } from "react";
import { connect } from "react-redux";
import { removeTask, completeTask, editTask } from "../redux/actions";

const TaskList = ({ tasks, removeTask, completeTask, editTask }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const renderTasks = () =>
    tasks.map((task) => {
      const conditionalRender =
        task.isCompleted === true ? "strikethrough" : "";
      const handleTitle = (e) => setNewTitle(e.target.value);
      const toggleEdited = (isEdited) => {
        setIsEdited(!isEdited);
      };
      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          editTask(task.id, newTitle);
          toggleEdited(isEdited);
        }
      };

      return (
        <div key={task.id}>
          <div className={conditionalRender}>
            {!isEdited ? (
              <li onClick={() => toggleEdited(isEdited)}>
                {`Title: ${task.title}`}{" "}
              </li>
            ) : (
              <React.Fragment>
                <span onClick={() => toggleEdited(isEdited)}>Task:</span>
                <input
                  className="editTaskInput"
                  id="editTaskInput"
                  value={newTitle}
                  onChange={handleTitle}
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
  return { ...state.tasks };
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
