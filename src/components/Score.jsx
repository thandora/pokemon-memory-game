import PropTypes from "prop-types";
import "../styles/Score.css";

function Score({ score, highScore }) {
  return (
    <div className="scoreBoard">
      <p>Highscore: {highScore}</p>
      <p>Score: {score}</p>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};

export { Score };
