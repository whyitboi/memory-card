import { useState, useEffect } from "react";
import "./App.css";

export function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  //useEffect to handle the fetching side effect
  //empty dependency array
  useEffect(() => {
    const pokemons = Array.from({ length: 12 }, (_, i) => i + 1);
    //ignore to control useEffect reset
    let ignore = false;

    //async function to fect pokemon image
    //function definition
    async function fetchPokemon() {
      try {
        const response = pokemons.map((number) => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then((res) => {
            if (!res.ok) {
              throw new Error(`Request failed: ${response.status}`);
            }
            return res.json();
          });
        });
        const results = await Promise.all(response);

        results.map((data) => {
          if (!ignore) {
            setPokemon({
              id: data.id,
              name: data.name,
              image: data.sprites.other["official-artwork"].front_default,
            });
          }
        });
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
