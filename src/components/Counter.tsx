import { useState } from "react";

export function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <input value={value} readOnly />
      <button onClick={() => { setValue(v => v + 1) }}>Count</button>
    </div>
  );
}