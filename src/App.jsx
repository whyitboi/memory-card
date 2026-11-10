import { useState, useEffect } from "react";
import { CardGrid } from "./components/CardGrid";
import { Scoreboard } from "./components/Scoreboard";
import { shuffle } from "./utils/shuffle";

export function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [message, setMessage] = useState("");

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
          return fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then(
            (res) => {
              if (!res.ok) {
                throw new Error(`Request failed: ${res.status}`);
              }
              return res.json();
            },
          );
        });
        const results = await Promise.all(response);
        const cards = results.map((data) => ({
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
        }));
        if (!ignore) {
          setPokemon(shuffle(cards));
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

  function handleCardClick(id) {
    if (clickedIds.includes(id)) {
      setMessage("Oops, You Already Clicked that");
      setClickedIds([]);
      setScore(0);
    } else {
      setMessage("");
      setClickedIds([...clickedIds, id]);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      if (newScore === pokemon.length) {
        setMessage("You win");
        setClickedIds([]);
        setScore(0);
      }
    }
    setPokemon(shuffle(pokemon));
  }

  if (error !== null) return <p>{error}</p>;
  if (pokemon === null) return <p>Loading...</p>;

  return (
    <>
      <header>
        <h1>
          Pokemon <span>Memory</span>
        </h1>
        <p>
          Get points by clicking a card - but don't click any card more than
          once
        </p>
      </header>
      <main>
        <Scoreboard score={score} bestScore={bestScore} />
        <p className="message" aria-live="polite">
          {message}
        </p>
        <CardGrid cards={pokemon} onCardClick={handleCardClick} />
      </main>
    </>
  );
}
