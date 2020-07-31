import React from 'react';

const Card = ({image}) => {
    return (
    <img className='card' alt='card' src={require(`../../../public/${image}`)}/>
)}


export default Card