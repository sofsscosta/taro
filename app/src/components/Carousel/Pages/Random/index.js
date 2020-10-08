import React from 'react';
import Card from '../../../Card';

const Random = ({ cards, onClick, selectedCard }) => {
  return (
    <div className="home_box">
      {cards &&
        cards.data.cards.map((card) => (
          <Card key={card.id} image={card.image} onClick={onClick} selectedCard={selectedCard} />
        ))}
    </div>
  );
};

export default Random;
