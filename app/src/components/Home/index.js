import React from 'react';
// import PropTypes from 'prop-types';
// import Card from '../Card';
import CarouselContainer from '../Carousel';
import strings from '../../locale/strings.json';

const Home = () => (
  <>
    <h1 className="home_title">{strings.title}</h1>
    <div className="home_container">
      <CarouselContainer />
    </div>
  </>
);

// Home.propTypes = {
//   cards: PropTypes.shape({
//     data: PropTypes.arrayOf({
//       cards: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         suite: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         interpretation: PropTypes.string.isRequired,
//       }),
//     }),
//   }).isRequired,
//   onClick: PropTypes.func.isRequired,
//   selectedCard: PropTypes.string.isRequired,
// };

export default Home;
