import React from 'react';
import Card from '../../../Card';

const Choose = ({ cards, onClick, selectedCard, goingToPreviousPage, goingToNextPage }) => {
  const getStyle = () => {
    if (goingToNextPage) return 'home_box rightToLeft';
    else if (goingToPreviousPage) return 'home_box leftToRight';
    else return 'home_box';
  };

  return (
    <div className={getStyle()}>
      {cards &&
        cards.data.cards.map((card) => (
          <Card key={card.id} image={card.image} onClick={onClick} selectedCard={selectedCard} />
        ))}
    </div>
  );
};

export default Choose;
