import React, { useState } from 'react';
import Choose from './Choose';
import useGetCards from '../../../../hooks/useGetCards';

const ChooseContainer = ({ goingToPreviousPage, goingToNextPage }) => {
  const [currentCard, setCurrentCard] = useState();

  const cards = useGetCards();

  const selectCard = (card) => (currentCard === card ? setCurrentCard() : setCurrentCard(card));

  return (
    <Choose
      cards={cards}
      onClick={selectCard}
      selectedCard={currentCard}
      goingToPreviousPage={goingToPreviousPage}
      goingToNextPage={goingToNextPage}
    />
  );
};

export default ChooseContainer;
