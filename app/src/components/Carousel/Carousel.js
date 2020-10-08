import React from 'react';
import TaroIcon from '../TaroIcon';
import { ChooseContainer, RandomContainer, SpreadContainer } from './Pages';

const Carousel = ({ page, goToPreviousPage, goToNextPage, goToPage }) => {
  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="arrow-container">
          <TaroIcon action={goToPreviousPage} icon="chevron-left" color="white" />
        </div>
        {page === 'choose' && (
          <div className="animation">
            <ChooseContainer />
          </div>
        )}
        <div className="arrow-container">
          <TaroIcon action={goToNextPage} icon="chevron-right" color="white" />
        </div>
      </div>
      <div className="dots">
        <TaroIcon icon="circle" color={page === 'choose' ? 'white' : 'grey'} action={() => goToPage('choose')} />
        <TaroIcon icon="circle" color={page === 'random' ? 'white' : 'grey'} action={() => goToPage('random')} />
        <TaroIcon icon="circle" color={page === 'spread' ? 'white' : 'grey'} action={() => goToPage('spread')} />
      </div>
    </div>
  );
};

export default Carousel;
