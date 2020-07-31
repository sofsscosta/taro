import React from 'react';
import { Card } from '../'

const Home = cards => (
    <>
        <h1>WOULD YOU LIKE TO...</h1>
        {cards.map(card => <Card image={card.image}/>)}
    </>
)


export default Home