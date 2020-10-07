import React from 'react';
import PropTypes from 'prop-types';
import cardsBack from '../../assets/images/cards_back.png';

const Card = ({ image, selectedCard, onClick }) => (
  <img
    onClick={() => {
      console.log(image);
      onClick(image);
    }}
    className="card"
    alt="card"
    src={selectedCard === image ? require(`../../assets/images/${image}`) : cardsBack}
  />
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  selectedCard: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
