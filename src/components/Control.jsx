import PropTypes from "prop-types";
import "../styles/Score.css";

function Control({ score, highScore }) {
  return (
    <div className="scoreBoard">
      <p>Highscore: {highScore}</p>
      <p>Score: {score}</p>
    </div>
  );
}

Control.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};

export { Control };
