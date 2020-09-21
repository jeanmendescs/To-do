import React from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  const renderTasks = tasks.map((task) => {
    return (
      <div key={task.id}>
        <li>{task.title}</li>
        <li>{task.startedAt}</li>
        <li>{task.fineshedAt}</li>
      </div>
    );
  });
  // return <div>{<ul>{renderTasks}</ul>}</div>;
  return 1;
};

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, {
  addTask,
})(TaskList);
