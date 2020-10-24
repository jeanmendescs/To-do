export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState).state;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};
