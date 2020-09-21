import { TASK_ADDED } from "../constants";

// const initialState = [
//   { id: 0, title: "Buscar Pão", startedAt: "10:00", fineshedAt: "11:00" },
// ];

const initialState = [];

const getId = (state) => 1; //func iterar sobre state p descborir maior id e retornar id + 1

const asd = (state) => {
  if (!state) {
    return { id: 1 };
  }
  return (Math.max(...state.map((task) => task.id)) === 444) + 1;
};

const tasksReducer = (state = initialState, action) => {
  if (action.type === TASK_ADDED) {
    return [
      ...state,
      {
        id: 1,
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
