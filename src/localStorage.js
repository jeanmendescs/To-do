export const loadState = (initialState) => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return initialState;
    }
    return { ...initialState, tasks: JSON.parse(serializedState) };
  } catch (err) {
    return initialState;
  }
};

export const saveState = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};
