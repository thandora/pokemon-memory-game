import PropTypes from "prop-types";
import "../styles/Card.css";

function Card({ pokeId, name, imgUrl, scoreState, clickedIdsState }) {
  const [score, setScore] = scoreState;
  const [clickedIds, setClickedIds] = clickedIdsState;

  function scoreHandler(id) {
    return () => {
      if (!clickedIds.includes(id)) {
        setClickedIds([...clickedIds, id]);
        setScore(score + 1);
      } else {
        setClickedIds([]);
        setScore(0);
      }
    };
  }

  return (
    <div className="pokemon-card" onClick={scoreHandler(pokeId)}>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

Card.propTypes = {
  pokemonList: PropTypes.array,
  pokeId: PropTypes.number,
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  scoreState: PropTypes.array,
  clickedIdsState: PropTypes.array,
};

export { Card };
