import React, { useState } from 'react';
import Carousel from './Carousel';
import useGetCards from '../../hooks/useGetCards';

const orderedPages = ['choose', 'random', 'spread'];

const CarouselContainer = () => {
  const [page, setPage] = useState(orderedPages[0]);

  const data = useGetCards();

  const onGoToPreviousPage = () => setPage(orderedPages[orderedPages.indexOf(page) - 1]);
  const onGoToNextPage = () => setPage(orderedPages[orderedPages.indexOf(page) + 1]);

  return <Carousel page={page} data={data} goToPreviousPage={onGoToPreviousPage} goToNextPage={onGoToNextPage} />;
};

export default CarouselContainer;
