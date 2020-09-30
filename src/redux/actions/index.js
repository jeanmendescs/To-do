import { TASK_ADDED, TASK_DELETED, TASK_COMPLETED } from "../constants";

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

export const completeTask = (id) => {
  return {
    type: TASK_COMPLETED,
    payload: id,
  };
};
