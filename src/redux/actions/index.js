import { TASK_ADDED, TASK_REMOVED } from "../constants";

export const addTask = (title) => {
  return {
    type: TASK_ADDED,
    payload: title,
  };
};

export const removeTask = (task) => {
  return {
    type: TASK_ADDED,
    payload: task,
  };
};

//criar actoins para remoacao, adcao e edicao
