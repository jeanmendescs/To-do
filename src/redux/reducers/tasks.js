import {
  TASK_ADDED,
  TASK_DELETED,
  TASK_COMPLETED,
  TASK_EDITED,
} from "../constants";
import getId from "../../utils/getid";

const initialState = {
  hasError: false,
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADDED:
      if (
        state.tasks.find((task) => task.title === action.payload) ||
        !action.payload
      ) {
        return state;
      }
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: getId(state),
            title: action.payload,
            startedAt: new Date().toLocaleString("en-US"),
            isCompleted: false,
          },
        ],
      };
    case TASK_DELETED:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TASK_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            if (!task.isCompleted) {
              task.isCompleted = true;
              return task;
            }
            task.isCompleted = false;
            return task;
          }
          return task;
        }),
      };
    case TASK_EDITED:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id && action.payload.title !== "") {
            task.title = action.payload.title;
            return task;
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

export default tasksReducer;
