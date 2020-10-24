import {
  TASK_ADDED,
  TASK_DELETED,
  TASK_COMPLETED,
  TASK_EDITED,
} from "../constants";
import getId from "../../utils/getid";
import { loadState, saveState } from "../../localStorage";

const initialState = {
  hasError: false,
  tasks: [],
};

const tasksReducer = (state = loadState(initialState), action) => {
  let result;
  switch (action.type) {
    case TASK_ADDED:
      if (
        state.tasks.find((task) => task.title === action.payload) ||
        !action.payload
      ) {
        return state;
      }
      result = {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: getId(state),
            title: action.payload.title,
            startedAt: new Date().toLocaleString("en-US"),
            isCompleted: false,
          },
        ],
      };
      saveState(result);
      return result;
    case TASK_DELETED:
      result = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
      // const abc = JSON.parse(localStorage.getItem("state"));
      // console.log(abc);
      // console.log(action.payload.id);
      // const test = abc.tasks.filter((task) => task.id !== action.payload.id);
      // saveState(test);
      // console.log(test);
      return result;
    case TASK_COMPLETED:
      result = {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
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
      saveState(result);
      return result;
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
