import React, { useState } from 'react';
import Carousel from './Carousel';

const orderedPages = ['choose', 'random', 'spread'];

const CarouselContainer = () => {
  const [page, setPage] = useState(orderedPages[0]);
  const [goingToPreviousPage, setGoingToPreviousPage] = useState(false);
  const [goingToNextPage, setGoingToNextPage] = useState(false);

  const onGoToPreviousPage = () => {
    setGoingToNextPage(false)
    if (page === orderedPages[0]) setPage(orderedPages[orderedPages.length - 1]);
    else setPage(orderedPages[orderedPages.indexOf(page) - 1]);
    setGoingToPreviousPage(true)
    setTimeout(() => setGoingToPreviousPage(false), 1000);
    
  };
  const onGoToNextPage = () => {
    setGoingToPreviousPage(false)
    if (page === orderedPages[orderedPages.length - 1]) setPage(orderedPages[0]);
    else setPage(orderedPages[orderedPages.indexOf(page) + 1]);
    setGoingToNextPage(true)
    setTimeout(() => setGoingToNextPage(false), 1000);
  };

  const goToPage = (page) => setPage(page);

  return (
    <Carousel
      page={page}
      goingToPreviousPage={goingToPreviousPage}
      goingToNextPage={goingToNextPage}
      goToPreviousPage={onGoToPreviousPage}
      goToNextPage={onGoToNextPage}
      goToPage={goToPage}
    />
  );
};

export default CarouselContainer;
