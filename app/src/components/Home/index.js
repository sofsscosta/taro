import React, {useState, useEffect} from 'react';
import {getCards} from '../../logic';
import Home from './';

const HomeContainer = () => {

    const [data, setData] = useState()

    useEffect(() => 
    (async () => {
        const cards = await getCards()
        return setData(cards);
    })(), [])

    return (
        <Home 
        cards={data}
        />
)}


export default HomeContainer