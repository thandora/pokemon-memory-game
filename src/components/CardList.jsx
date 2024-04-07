import PropTypes from "prop-types";
import "../styles/CardList.css";
import { useState } from "react";
import { Card } from "./Card";

function CardList({ pokemonList, scoreState, clickedIdsState }) {
  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => {
        return (
          <Card
            pokemonList={pokemonList}
            key={pokemon.id}
            pokeId={pokemon.id}
            name={pokemon.name.toUpperCase()}
            imgUrl={pokemon.spriteUrl}
            scoreState={scoreState}
            clickedIdsState={clickedIdsState}
          />
        );
      })}
    </div>
  );
}

CardList.propTypes = {
  pokemonList: PropTypes.array,
  scoreState: PropTypes.array,
  clickedIdsState: PropTypes.array,
};

export { CardList };
