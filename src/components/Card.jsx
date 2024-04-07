import PropTypes from "prop-types";
import "../styles/Card.css"

function Card({ name, imgUrl }) {
  return (
    <div className="pokemon-card">
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
};

export { Card };
