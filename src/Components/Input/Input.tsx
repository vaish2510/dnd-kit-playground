import React, { useState } from "react";
import "./input.css";

export const Input = ({ onSubmit }: any) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
