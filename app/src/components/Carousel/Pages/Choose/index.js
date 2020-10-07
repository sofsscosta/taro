import React, { useState } from 'react';
// import getCards from '../../.././../logic';
import Choose from './Choose';

const ChooseContainer = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState();

  const selectCard = (card) => {
    currentCard === card ? setCurrentCard() : setCurrentCard(card);
  };

  return <Choose cards={cards} onClick={selectCard} currentCard={currentCard} />;
};

export default ChooseContainer;
