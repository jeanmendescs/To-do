import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

const Input = ({ addTask }) => {
  const [term, setTerm] = useState("");
  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask(term);
      setTerm("");
    }
  };
  const handleInput = (e) => setTerm(e.target.value);

  return (
    <div>
      <input
        className="addTaskInput"
        id="taskInput"
        value={term}
        onChange={handleInput}
        type="text"
        placeholder="New task"
        onKeyDown={handleKeyDown}
        ref={textInput}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (title) => {
      dispatch(addTask(title));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
