import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";
import "./style.css";

const Input = ({ addTask }) => {
  const [term, setTerm] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask(term);
      setTerm("");
    }
  };
  console.log(term);
  return (
    <div>
      <input
        className="addTaskInput"
        id="taskInput"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder="New task"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (title) => {
      dispatch(addTask(title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
