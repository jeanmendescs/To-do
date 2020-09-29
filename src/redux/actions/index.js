import { TASK_ADDED, TASK_DELETED } from "../constants";

export const addTask = (title) => {
  return {
    type: TASK_ADDED,
    payload: title,
  };
};

export const removeTask = (id) => {
  return {
    type: TASK_DELETED,
    payload: id,
  };
};

//criar actoins para remoacao, adcao e edicao
