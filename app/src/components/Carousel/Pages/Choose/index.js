import React, { useState } from 'react';
import Choose from './Choose';
// import useGetCards from '../../hooks/useGetCards';

const ChooseContainer = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState();

  const selectCard = (card) => {
    currentCard === card ? setCurrentCard() : setCurrentCard(card);
  };

  return <Choose cards={cards} onClick={selectCard} currentCard={currentCard} />;
};

export default ChooseContainer;
