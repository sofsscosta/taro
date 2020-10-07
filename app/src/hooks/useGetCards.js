import { useEffect, useState } from 'react';
import getCards from '../logic';

const useGetCards = () => {
  const [cards, setCards] = useState();

  useEffect(
    () =>
      (async () => {
        setCards(await getCards());
      })(),
    []
  );
  return cards;
};

export default useGetCards;
