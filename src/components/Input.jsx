import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

const Input = ({ addTask, tasks }) => {
  const [term, setTerm] = useState("");

  return (
    <div>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
      />
      <button onClick={() => addTask(term)}>Add Task</button>
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
