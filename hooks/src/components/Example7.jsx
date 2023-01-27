import React, { useCallback, useMemo, useState } from "react";

function sum(persons) {
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "mark", age: 39 },
    { name: "hanna", age: 28 },
  ]);

  const count = useMemo(() => {
    sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log(value);
    }, [value]);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>Click</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
