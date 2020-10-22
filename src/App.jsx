import React, { useEffect } from "react";
import TaskList from "./components/TaskList";
import Input from "./components/Input";
import * as actions from "./redux/actions/";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveState } from "./localStorage";

import "./style.css";

const App = ({ tasks, removeTask, completeTask, editTask, addTask }) => {
  useEffect(() => {
    if (Object.keys(tasks).length > 0) {
      saveState(tasks);
    }
  });

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
