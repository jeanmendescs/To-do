import React from "react";
import TaskList from "./components/TaskList";
import Input from "./components/Input";

const App = () => {
  return (
    <div>
      <div>
        <Input />
      </div>
      <TaskList />
    </div>
  );
};

export default App;
