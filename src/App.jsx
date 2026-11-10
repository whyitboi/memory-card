import { useState, useEffect } from "react";
import "./App.css";

export function App() {
  const [pokemon, setPokemon] = useState(null);

  //useEffect to handle the fetching side effect
  //empty dependency array
  useEffect(() => {
    //ignore to control useEffect reset
    let ignore = false;

    //async function to fect pokemon image
    //function definition
    async function fetchPokemon() {
      const respose = await fetch("https://pokeapi.co/api/v2/pokemon/132");
      const data = await respose.json();

      if (!ignore) {
        setPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
        });
      }
    }

    //function call
    fetchPokemon();

    //clean-up function
    return () => {
      ignore = true;
    };
  }, []);
  if (pokemon === null) return <p>Loading...</p>;

  return <p>{pokemon.name}</p>;
}
