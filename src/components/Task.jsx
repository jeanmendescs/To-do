import React, { useState, useEffect, useRef } from "react";
import { BiCheck, BiTrash, BiEdit, BiX, BiPencil } from "react-icons/bi";

const Task = ({ task, removeTask, completeTask, editTask }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const textInputRef = useRef();

  useEffect(() => {
    if (isEdited) {
      textInputRef.current.focus();
    }
  }, [isEdited]);

  const conditionalRender = task.isCompleted === true ? "strikethrough" : "";
  const handleTitle = (e) => setNewTitle(e.target.value);
  const toggleEdited = () => {
    setIsEdited(!isEdited);
  };
  const handleToggle = () => {
    toggleEdited();
  };

  const handleEditTask = () => {
    editTask({ id: task.id, title: newTitle });
    toggleEdited();
    setNewTitle("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      editTask({ id: task.id, title: newTitle });
      toggleEdited();
      setNewTitle("");
    }
  };
  const handleCompleteTask = () => completeTask({ id: task.id });
  const handleRemoveTask = () => removeTask({ id: task.id });

  const handleBlur = () => {
    setIsEdited(false);
    setNewTitle("");
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
                ref={textInputRef}
                maxLength="20"
              />
            </div>
          )}
        </div>
        <li>
          <strong>Created at:</strong> {task.startedAt}
        </li>
        <div>
          {!isEdited ? (
            <div>
              <i className="complete-task" onClick={handleCompleteTask}>
                <BiCheck />
              </i>
              <i className="edit-task" onClick={handleToggle}>
                <BiEdit />
              </i>
              <i className="remove-task" onClick={handleRemoveTask}>
                <BiTrash />
              </i>
            </div>
          ) : (
            <div>
              <i className="complete-task" onMouseDown={handleEditTask}>
                <BiPencil />
              </i>
              <i className="remove-task" onClick={toggleEdited}>
                <BiX />
              </i>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Task;
