import React, { useState, useEffect, useRef } from "react";
import { BiCheck, BiTrash, BiEdit } from "react-icons/bi";

const Task = ({ task, removeTask, completeTask, editTask }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const textInput = useRef();

  useEffect(() => {
    if (isEdited) {
      textInput.current.focus();
    }
  }, [isEdited]);

  const conditionalRender = task.isCompleted === true ? "strikethrough" : "";
  const handleTitle = (e) => setNewTitle(e.target.value);
  const toggleEdited = () => {
    setIsEdited(!isEdited);
  };
  const toggleEditButton = () => {
    setEditButton(!editButton);
  };

  const handleToggle = (isEdited, editButton) => {
    toggleEdited(!isEdited);
    toggleEditButton(!editButton);
  };

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
    if (editButton) {
      return;
    } else {
      setIsEdited(() => !isEdited);
      setNewTitle("");
    }
  };

  return (
    <React.Fragment>
      <div className={`div-li ${conditionalRender}`}>
        <div className="div-task-input">
          {!isEdited ? (
            <li className="li-input">
              <strong>Title:</strong> {task.title}
            </li>
          ) : (
            <div className="div-edit-task-input">
              <strong>Title:</strong>
              <input
                className="edit-task-input"
                value={newTitle}
                onChange={handleTitle}
                onKeyDown={handleKeyDown}
                placeholder={task.title}
                onBlur={handleBlur}
                ref={textInput}
                maxLength="20"
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
        <i className="edit-task" onClick={() => handleToggle()}>
          <BiEdit />
        </i>
        <i className="remove-task" onClick={handleRemoveTask}>
          <BiTrash />
        </i>
      </div>
    </React.Fragment>
  );
};

export default Task;
