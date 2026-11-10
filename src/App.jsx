import { useState, useEffect } from "react";
import "./App.css";

export function App() {
  const [pokemon, setPokemon] = useState(null);
  async function fetchPokemon() {
    const respose = await fetch("https://pokeapi.co/api/v2/pokemon/132");
    const data = await respose.json();
  }

  return <p></p>;
}
