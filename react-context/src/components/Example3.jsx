import { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

export default function Example3() {
  const persons = useContext(PersonContext);
  return (
    <ul>
      {persons.map((person) => (
        <li>
          name : {person.name} age : {person.age}
        </li>
      ))}
    </ul>
  );
}
