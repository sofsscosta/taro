import React from 'react';

const Card = ({image}) => {
    return (
    <img src={require(`../../../public/${image}`)}/>
)}


export default Card