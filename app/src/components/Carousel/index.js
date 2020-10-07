import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import getCards from '../../logic';

const orderedPages = ['choose', 'random', 'spread'];

const CarouselContainer = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(orderedPages[0]);

  useEffect(() => {
    (async () => {
      const cards = await getCards();
      setData(cards);
    })();
  }, []);

  const onGoToPreviousPage = () => setPage(orderedPages[orderedPages.indexOf(page) - 1]);
  const onGoToNextPage = () => setPage(orderedPages[orderedPages.indexOf(page) + 1]);

  return <Carousel page={page} data={data} goToPreviousPage={onGoToPreviousPage} goToNextPage={onGoToNextPage} />;
};

export default CarouselContainer;
