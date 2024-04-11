import PropTypes from "prop-types";
import "../styles/Control.css";

function Control({ score, highScore, setPokemonList, setScore }) {
  return (
    <div className="scoreBoard">
      <div>
        <p>Highscore: {highScore}</p>
        <p>Score: {score}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setPokemonList();
          }}
        >
          New Game
        </button>
        <button
          onClick={() => {
            setScore(0);
          }}
        >
          Reset Current Game
        </button>
      </div>
    </div>
  );
}

Control.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
  setPokemonList: PropTypes.func,
  setScore: PropTypes.func,
};

export { Control };
