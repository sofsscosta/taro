import React from 'react';
import Card from '../Card';

const Home = ({cards}) => {
    return(
    <>
        <h1 className='home_title'>WOULD YOU LIKE TO...</h1>
        <div className='home_container'>
            <div className='home_box'>
            {cards && cards.data.cards.map(card => <Card key={card.id} image={card.image}/>)}
            </div>
        </div>
    </>
)}


export default Home