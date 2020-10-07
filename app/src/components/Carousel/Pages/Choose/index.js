import React, { useState, useEffect } from 'react';
// import getCards from '../../.././../logic';
import Choose from './Choose';

const ChooseContainer = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState();

  const selectCard = (card) => {
    console.log(card);
    currentCard === card ? setCurrentCard() : setCurrentCard(card);
    console.log(currentCard)
  };

  return <Choose cards={cards} onClick={selectCard} currentCard={currentCard} />;
};

export default ChooseContainer;
