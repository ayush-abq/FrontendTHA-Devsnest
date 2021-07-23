import React from 'react';
import './Card.css';

const Card = ({row, col}) => {
    return (
        <div>
             <div className="card" style={{ backgroundColor: ((row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)) ? "black" : "white" }}></div>
        </div>
    )
}

export default Card