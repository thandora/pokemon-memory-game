import PropTypes from "prop-types";
import "../styles/Header.css"

function Header({ score, highScore }) {
  return (
    <header>
      <div>Score: {score}</div>
      <div>High score: {highScore}</div>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};

export { Header };
