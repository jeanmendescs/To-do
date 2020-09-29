import { TASK_ADDED, TASK_DELETED } from "../constants";

const initialState = [];

const getId = (state) => {
  if (state === undefined || state.length === 0) {
    return 1;
  }
  return state.map((task) => task.id).sort((a, b) => b - a)[0] + 1;
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADDED:
      if (state.find((task) => task.title === action.payload)) {
        return state;
      }
      return [
        ...state,
        {
          id: getId(state),
          title: action.payload,
          startedAt: new Date().toLocaleString("en-US"),
          finishedAt: "",
        },
      ];
    case TASK_DELETED:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export default tasksReducer;
