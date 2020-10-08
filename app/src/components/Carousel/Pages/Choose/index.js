import React, { useState } from 'react';
import Choose from './Choose';
import useGetCards from '../../../../hooks/useGetCards';

const ChooseContainer = () => {
  const [currentCard, setCurrentCard] = useState();

  const cards = useGetCards();

  const selectCard = (card) => (currentCard === card ? setCurrentCard() : setCurrentCard(card));

  return <Choose cards={cards} onClick={selectCard} selectedCard={currentCard} />;
};

export default ChooseContainer;
