import React, { useState } from "react";
import { connect } from "react-redux";
import { removeTask, completeTask } from "../redux/actions";
import "./style.css";

const TaskList = ({ tasks, removeTask, completeTask, abc }) => {
  const renderTasks = () =>
    tasks.map((task) => {
      const conditionalRender =
        task.isCompleted === true ? "strikethrough" : "";
      return (
        <div
          className={conditionalRender}
          key={task.id}
          onClick={() => completeTask(task.id)}
        >
          <li>{`Tarefa: ${task.title}`} </li>
          <li>{`Criada em: ${task.startedAt}`}</li>
          <li>{task.fineshedAt}</li>
          <button
            className={conditionalRender}
            onClick={() => removeTask(task.id)}
          >
            Remove Task
          </button>
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
    completeTask: (id) => {
      dispatch(completeTask(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
