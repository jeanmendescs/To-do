import {
  TASK_ADDED,
  TASK_DELETED,
  TASK_COMPLETED,
  TASK_EDITED,
} from "../constants";

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

export const editTask = (data) => {
  return {
    type: TASK_EDITED,
    payload: data,
  };
};
