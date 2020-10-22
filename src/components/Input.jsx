import React, { useState, useRef, useEffect } from "react";

const Input = ({ addTask }) => {
  const [term, setTerm] = useState("");
  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask({ title: term });
      setTerm("");
    }
  };
  const handleInput = (e) => setTerm(e.target.value);

  return (
    <React.Fragment>
      <input
        value={term}
        onChange={handleInput}
        placeholder="New task"
        onKeyDown={handleKeyDown}
        ref={textInput}
        maxLength="20"
      />
    </React.Fragment>
  );
};

export default Input;
