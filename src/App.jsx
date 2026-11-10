import { useState, useEffect } from "react";
import "./App.css";

export function App() {
  const [pokemon, setPokemon] = useState(null);

  //useEffect to handle the fetching side effect
  //empty dependency array
  useEffect(() => {
    //async function to fect pokemon image
    //function definition
    async function fetchPokemon() {
      const respose = await fetch("https://pokeapi.co/api/v2/pokemon/132");
      const data = await respose.json();

      setPokemon({
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
      });
    }

    //function call
    fetchPokemon();
  }, []);

  return <p>{pokemon.name}</p>;
}
