import { useState, useEffect } from "react";
import "./App.css";

export function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const pokemons = Array.from({ length: 12 }, (_, i) => i + 1);

  //useEffect to handle the fetching side effect
  //empty dependency array
  useEffect(() => {
    //ignore to control useEffect reset
    let ignore = false;

    pokemons.map((pokemmon) => {
      //does the fecth go here??
    });

    //async function to fect pokemon image
    //function definition
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/132");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        if (!ignore) {
          setPokemon({
            id: data.id,
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
          });
        }
      } catch (error) {
        setError(error.message);
      }
    }

    //function call
    fetchPokemon();

    //clean-up function
    return () => {
      ignore = true;
    };
  }, []);

  if (error !== null) return <p>{error}</p>;
  if (pokemon === null) return <p>Loading...</p>;

  return <p>{pokemon.name}</p>;
}
