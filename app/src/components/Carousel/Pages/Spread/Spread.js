import React, { useState, useEffect } from 'react';
import getCards from '../../.././../logic';
import Spread from './Spread';

const SpreadContainer = () => {
  const [data, setData] = useState();
  const [selectedCard, setSelectedCard] = useState()

  useEffect(
    () =>
      (async () => {
        const cards = await getCards();
        setData(cards);
      })(),
    []
  );

  const selectCard = card => {
    selectedCard === card ? setSelectedCard() : setSelectedCard(card)
  }

  return <Spread cards={data} onClick={selectCard} selectedCard={selectedCard}/>;
};

export default SpreadContainer;
