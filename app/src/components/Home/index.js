import React, {useState, useEffect} from 'react';
import {getCards} from '../../logic';
import Home from './';

const HomeContainer = () => {

    const [data, getData] = useState()

    useEffect(async () => {
        const cards = await getCards()
        console.log(cards)
        setData(cards);
    }, [])

    return (
        <Home 
        cards={data}
        />
)}


export default HomeContainer