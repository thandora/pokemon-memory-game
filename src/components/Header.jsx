import PropTypes from "prop-types";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Pokemon Memory Game</h1>
      <p>Aim for the best score by selecting the pokemon that you havent selected before!</p>
    </div>
  );
}

export { Header };
