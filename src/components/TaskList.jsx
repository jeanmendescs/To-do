import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../redux/actions";
import "./style.css";

const TaskList = ({ tasks, removeTask }) => {
  //sempre que for usar funcoes para renderizar usar func anonima () =>
  const renderTasks = () =>
    tasks.map((task) => {
      return (
        <div key={task.id}>
          <li>{task.title}</li>
          <li>{task.startedAt}</li>
          <li>{task.fineshedAt}</li>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
