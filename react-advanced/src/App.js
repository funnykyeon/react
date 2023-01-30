import "./App.css";
import React from "react";

const Person = React.memo(({ name, age }) => {
  console.log("person render");
  return (
    <div>
      {name},{age}
    </div>
  );
});

function App() {
  const [state, setState] = React.useState({
    text: "",
    persons: [
      { id: 1, name: "Mark", age: 39 },
      { id: 2, name: "Hanna", age: 28 },
    ],
  });

  const toPersonClick = React.useCallback(() => {}, []);

  const { text, persons } = state;
  return (
    <div>
      <input type="text" value={text} onChange={_change} />
      <ul>
        {persons.map((person) => {
          return <Person {...person} key={person.id} onClick={toPersonClick} />;
        })}
      </ul>
    </div>
  );
  function _change(e) {
    setState({ ...state, text: e.target.value });
  }
}
export default App;
