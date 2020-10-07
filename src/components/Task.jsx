import React, { useState, useEffect, useRef } from "react";
import { BiCheck, BiTrash } from "react-icons/bi";

const Task = ({ task, removeTask, completeTask, editTask }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const textInput = useRef();

  useEffect(() => {
    if (isEdited) {
      textInput.current.focus();
    }
  }, [isEdited]);

  const conditionalRender = task.isCompleted === true ? "strikethrough" : "";
  const handleTitle = (e) => setNewTitle(e.target.value);
  const toggleEdited = (isEdited) => {
    setIsEdited(!isEdited);
  };
  const handleToggle = () => toggleEdited(isEdited);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      editTask({ id: task.id, title: newTitle });
      toggleEdited(isEdited);
      setNewTitle("");
    }
  };
  const handleCompleteTask = () => completeTask({ id: task.id });
  const handleRemoveTask = () => removeTask({ id: task.id });

  const handleBlur = () => {
    setIsEdited((isEdited) => !isEdited);
    setNewTitle("");
  };

  return (
    <React.Fragment>
      <div className={`div-li ${conditionalRender}`}>
        <div className="div-task-input">
          {!isEdited ? (
            <li onClick={handleToggle}>
              <strong>Title:</strong> {task.title}
            </li>
          ) : (
            <div className="div-edit-task-input">
              <span onClick={handleToggle}>
                <strong>New Title:</strong>
              </span>
              <input
                className="edit-task-input"
                value={newTitle}
                onChange={handleTitle}
                onKeyDown={handleKeyDown}
                placeholder="Title"
                onBlur={handleBlur}
                ref={textInput}
              />
            </div>
          )}
        </div>
        <li>
          <strong>Created at:</strong> {task.startedAt}
        </li>
        <i className="complete-task" onClick={handleCompleteTask}>
          <BiCheck />
        </i>
        <i className="remove-task" onClick={handleRemoveTask}>
          <BiTrash />
        </i>
      </div>
    </React.Fragment>
  );
};

export default Task;
