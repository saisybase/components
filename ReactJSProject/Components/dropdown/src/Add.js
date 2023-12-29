import React, { useState } from "react";

export default function Add() {
  const [value1, setvalue] = useState(0);
  const [value2, setvalue1] = useState(0);
  const [result, setresult] = useState(0);

  const adding = () => {
    const y = parseInt(value1) + parseInt(value2);
    setresult(y);
  };

  return (
    <div>
      <input
        type="text"
        name="fv"
        placeholder="Enter First Number"
        onChange={(event) => setvalue(event.target.value)}
      ></input>
      <input
        type="text"
        name="sv"
        placeholder="Enter Second Number"
        onChange={(event) => setvalue1(event.target.value)}
      ></input>
      <input
        type="text"
        name="output"
        value={result}
        onChange={(event) => setresult(event.target.value)}
      ></input>
      <button onClick={adding}>ADD</button>
    </div>
  );
}
