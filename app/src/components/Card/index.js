import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image }) => <img className="card" alt="card" src={require(`../../../public/${image}`)} />;

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
