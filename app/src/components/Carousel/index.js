import React, { useState } from 'react';
import Carousel from './Carousel';

const orderedPages = ['choose', 'random', 'spread'];

const CarouselContainer = () => {
  const [page, setPage] = useState(orderedPages[0]);

  const onGoToPreviousPage = () => {
    if (page === orderedPages[0]) setPage(orderedPages[orderedPages.length - 1]);
    else setPage(orderedPages[orderedPages.indexOf(page) - 1]);
  };
  const onGoToNextPage = () => {
    if (page === orderedPages[orderedPages.length - 1]) setPage(orderedPages[0]);
    else setPage(orderedPages[orderedPages.indexOf(page) + 1]);
  };

  return <Carousel page={page} goToPreviousPage={onGoToPreviousPage} goToNextPage={onGoToNextPage} />;
};

export default CarouselContainer;
