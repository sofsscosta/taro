import { useEffect, useState } from 'react';
import getCards from '../logic';

const useGetCards = () => {
  const [cards, setCards] = useState();

  const getAllCards = async () => {
    let response = await getCards();
    setCards(response);
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return cards;
};

export default useGetCards;
