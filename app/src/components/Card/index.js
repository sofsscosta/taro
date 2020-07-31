import React from 'react';

const Card = image => {
    console.log(image)
    return (
    <img src={require(`../../../public/images/${image}.jpg`)} />
)}


export default Card