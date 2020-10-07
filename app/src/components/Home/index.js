import React, { useState, useEffect } from 'react';
import getCards from '../../logic';
import Home from './Home';

const HomeContainer = () => {
  const [data, setData] = useState();
  const [selectedCard, setSelectedCard] = useState()

  useEffect(
    () =>
      (async () => {
        const cards = await getCards();
        console.log(cards)
        setData(cards);
      })(),
    []
  );

  const selectCard = card => {
    setSelectedCard(card)
  }

  return <Home cards={data} onClick={selectCard} selectedCard={selectedCard}/>;
};

export default HomeContainer;
