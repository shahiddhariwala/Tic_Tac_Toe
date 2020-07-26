import React from 'react';
import Circle from "../assets/Circle.png";
import Cross from "../assets/cross.png";
const style = {
    background: 'white',
    border: '1px solid white',
    borderRadius: '20px',
    boxShadow:'0px 1px 2px gray',
    margin: '2px',
    cursor: 'pointer',
    outline: 'none'
};
const imgStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value === 'X' ? <img src={Cross} style={imgStyle} /> : null}
        {value === 'O' ? <img src={Circle} style={imgStyle} /> : null}
    </button>
);

export default Square;