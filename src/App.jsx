import React from "react";
import TaskList from "./components/TaskList";
import Input from "./components/Input";
import * as actions from "./redux/actions/";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./style.css";

const App = ({ tasks, removeTask, completeTask, editTask, addTask }) => {
  return (
    <div className="content">
      <h3>To-Do List</h3>
      <Input addTask={addTask} />
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        completeTask={completeTask}
        editTask={editTask}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.tasks };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch, ...bindActionCreators({ ...actions }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
