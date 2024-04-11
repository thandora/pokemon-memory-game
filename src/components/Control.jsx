import PropTypes from "prop-types";
import "../styles/Control.css";

function Control({ score, highScore, setPokemonList }) {
  return (
    <div className="scoreBoard">
      <div>
        <p>Highscore: {highScore}</p>
        <p>Score: {score}</p>
      </div>
    </div>
  );
}

Control.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
  setPokemonList: PropTypes.func,
};

export { Control };
