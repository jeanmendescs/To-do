import { TASK_ADDED } from "../constants";

// const initialState1 = [
//   { id: 0, title: "Buscar Pão", startedAt: "10:00", fineshedAt: "11:00" },
//   { id: 1, title: "Buscar Pão", startedAt: "10:00", fineshedAt: "11:00" },
//   { id: 2, title: "Buscar Pão", startedAt: "10:00", fineshedAt: "11:00" },
// ];

const initialState = [];

const getId = (state) => {
  if (state === undefined || state.length === 0) {
    return 1;
  }
  return state.map((task) => task.id).sort((a, b) => b - a)[0] + 1;
};

const tasksReducer = (state = initialState, action) => {
  if (action.type === TASK_ADDED) {
    return [
      ...state,
      {
        id: getId(state),
        title: action.payload,
        startedAt: new Date(),
        finishedAt: "",
      },
    ];
  }
  return state;
};

export default tasksReducer;

//id para identificar cada task
