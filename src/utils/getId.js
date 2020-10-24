const getId = (state) => {
  if (state.tasks === undefined || state.tasks.length === 0) {
    return 1;
  }
  return state.tasks.map((task) => task.id).sort((a, b) => b - a)[0] + 1;
};

export default getId;
