import React from 'react';
import TaroIcon from '../TaroIcon';
import { ChooseContainer, RandomContainer, SpreadContainer } from './Pages';

const Carousel = ({ page, data, goToPreviousPage, goToNextPage }) => {
  return (
    <div className="carousel">
      <div className="arrows-container">
        <TaroIcon name="chevronLeft" action={goToPreviousPage} icon="fas fa-chevron-left" />
        <TaroIcon name="chevronRight" action={goToNextPage} icon="fas fa-chevron-right" />
      </div>
      {page === 'choose' && <ChooseContainer cards={data}/>}
    </div>
  );
};

export default Carousel;
