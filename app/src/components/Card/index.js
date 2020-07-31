import React from 'react';

const Card = image => {
    console.log(image)
    return (
    <img alt={'card'} src={require(`../../../public/images/${image}.jpg`)} />
)}


export default Card