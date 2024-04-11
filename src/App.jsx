import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import "./styles/App.css";
import { Control } from "./components/Control";
import { CardList } from "./components/CardList";
import { shuffleArray } from "./utils";

async function getRandomUniquePokemon(n) {
  const pokemonSet = new Set(); // Set to store unique Pokémon
  const pokemonList = [];
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  try {
    while (pokemonSet.size < n) {
      const randomPokemonId = Math.floor(Math.random() * 1025) + 1;

      const response = await fetch(apiUrl + randomPokemonId);
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon data");
      }

      const pokemonData = await response.json();

      pokemonSet.add({
        id: pokemonData.id,
        name: pokemonData.name,
        spriteUrl: pokemonData.sprites.other["official-artwork"].front_default,
        types: pokemonData.types.map((type) => type.type.name),
      });
    }

    // Set to array
    pokemonSet.forEach((pokemon) => {
      pokemonList.push(pokemon);
    });

    return pokemonList;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
}

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  useEffect(() => {
    async function setter() {
      setPokemonList(await getRandomUniquePokemon(5));
    }

    if (!pokemonList) {
      setter();
    }
  }, [pokemonList]);

  // Effect for setting high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <>
      <Header />

      <Control score={score} highScore={highScore} setPokemonList={setPokemonList} />

      {pokemonList ? (
        <CardList
          pokemonList={shuffleArray(pokemonList)}
          scoreState={[score, setScore]}
          clickedIdsState={[clickedIds, setClickedIds]}
          
        />
      ) : (
        "loading"
      )}
    </>
  );
}

export default App;
