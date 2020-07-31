import React from 'react';
import Card from '../Card';

const Home = ({cards}) => {
    console.log(cards)
    return(
    <>
        <h1 className='title'>WOULD YOU LIKE TO...</h1>
        {cards && cards.data.cards.map(card => <Card key={card.id} image={card.image}/>)}
    </>
)}


export default Home