import { combineReducers } from "redux";

const tasksReducer = () => {
  return [
    { Task: "Buscar Pão" },
    { Task: "Arrumar a cozinha" },
    { Task: "Levar o cachorro para passear" },
  ];
};

const selectedTasksReducer = (selectedTask = null, action) => {
  if (action.type === "TASK_SELECTED") {
    return action.payload;
  }
  return selectedTask;
};

export default combineReducers({
  tasksReducer,
  selectedTasksReducer,
});
