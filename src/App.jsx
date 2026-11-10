// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";

export function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  // const animals = [];
  // const animalsList = animals.map((animal) => {
  //   return <l1 key={animal}>{animal}</l1>;
  // });

  return (
    <>
      <h1>Animlas:</h1>
      <List animals={animals}></List>
    </>
  );
}

//rending a list of components
function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }
  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }
  return (
    <ul>
      {props.animals.map((animal, index) => {
        //ternary operator can be used for conditionals
        //return animal.startsWith("L") ? <ListItem key={animal} animal={animal} /> : null;
        return (
          <ListItem key={animal} animal={animal}>
            {index}
          </ListItem>
        );
      })}
    </ul>
  );
}

//export default App;
