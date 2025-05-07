"use client";

import React, { useState } from "react";

export default function page() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 4);
  };

  const handleDecrement = () => {
    if (value > 3) {
      setValue(value - 3);
    } else {
      setValue(0);
    }
  };
  return (
    <div>
      <p>{value}</p>
      <button onClick={handleIncrement}>+4</button>
      <br />
      <button onClick={handleDecrement}>-3</button>
    </div>
  );
}
