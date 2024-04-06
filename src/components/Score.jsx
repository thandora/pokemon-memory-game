import PropTypes from "prop-types";

function Score({ score, highScore }) {
  return (
    <>
      <p>Highscore: {highScore}</p>
      <p>Score: {score}</p>
    </>
  );
}

Score.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};

export { Score };
