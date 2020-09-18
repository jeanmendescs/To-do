import React from "react";
import { connect } from "react-redux";

const TaskList = ({ tasks }) => {
  const renderTasks = tasks.map((task) => {
    return (
      <div>
        <ul>
          <li>{task}</li>
        </ul>
      </div>
    );
  });
  return <div>{renderTasks}</div>;
};

const mapStateToProps = (state) => {
  return { tasks: state.tasksReducer };
};

export default connect(mapStateToProps)(TaskList);
