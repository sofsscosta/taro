import React from 'react';
import PropTypes from 'prop-types';
import cardsBack from '../../assets/images/cards_back.png';

const Card = ({ image, selectedCard, onClick }) => (
  <img
    onClick={() => {
      onClick(image);
    }}
    className="card"
    alt="card"
    src={selectedCard === image ? require(`../../assets/images/${image}`) : cardsBack}
  />
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  selectedCard: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  selectedCard: undefined
};

export default Card;
