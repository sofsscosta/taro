import React, {useState, useEffect} from 'react';
import {getCards} from '../../logic'
import Home from './Home'

const HomeContainer = () => {

    const [data, setData] = useState()
    
useEffect(() => 
    (async () => {
        const cards = await getCards()
        console.log(cards)
        setData(cards)
    } )()
, [])

    return (
        <Home cards={data}/>
)}


export default HomeContainer