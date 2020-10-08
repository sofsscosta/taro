import React from 'react';
import TaroIcon from '../TaroIcon';
import { ChooseContainer } from './Pages';

const Carousel = ({ page, goToPreviousPage, goToNextPage }) => {
  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="arrow-container">
          <TaroIcon action={goToPreviousPage} icon="chevron-left" color="white" />
        </div>
        {page === 'choose' && <ChooseContainer />}
        <div className="arrow-container">
          <TaroIcon action={goToNextPage} icon="chevron-right" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
