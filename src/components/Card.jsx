import PropTypes from "prop-types";

function Card({ name, imgUrl }) {
  return (
    <div>
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
