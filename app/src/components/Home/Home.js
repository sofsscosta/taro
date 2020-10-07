import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const Home = ({ cards, onClick, selectedCard }) => (
  <>
    <h1 className="home_title">WOULD YOU LIKE TO...</h1>
    <div className="home_container">
      <div className="home_box">
        {cards &&
          cards.data.cards.map((card) => (
            <Card key={card.id} image={card.image} onClick={onClick} selectedCard={selectedCard} />
          ))}
      </div>
    </div>
  </>
);

Home.propTypes = {
  cards: PropTypes.shape({
    data: PropTypes.arrayOf({
      cards: PropTypes.shape({
        name: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        interpretation: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedCard: PropTypes.string.isRequired
};

export default Home;
