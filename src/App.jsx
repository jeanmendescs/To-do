import React from "react";
import TaskList from "./components/TaskList";
import Input from "./components/Input";

const App = () => {
  return (
    <div>
      <h3>To-Do List</h3>
      <div>
        <Input />
      </div>
      <TaskList />
    </div>
  );
};

export default App;
