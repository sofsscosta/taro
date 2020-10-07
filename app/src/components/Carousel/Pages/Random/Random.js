import React, { useState, useEffect } from 'react';
import getCards from '../../.././../logic';
import Random from './Random';

const RandomContainer = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState();

  const selectCard = (card) => {
    selectedCard === card ? setSelectedCard() : setSelectedCard(card);
  };

  if (data.length === 0) return null;
  return <Random cards={data} onClick={selectCard} selectedCard={selectedCard} />;
};

export default RandomContainer;
