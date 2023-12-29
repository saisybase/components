import React, { useState } from "react";

export default function Basicdropdown() {
  const [selectval, setselectval] = useState("");

  const dropdownload = (e) => {
    setselectval(e.target.value);
  };

  return (
    <div className="main">
      <h1>{selectval}</h1>

      <select name="country" value={selectval} onChange={dropdownload}>
        <option>India</option>
        <option>America</option>
        <option>England</option>
      </select>
    </div>
  );
}
