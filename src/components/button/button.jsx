import React from 'react';
import  './button.scss'


const Button = ({label, handleClick, ...otherProps}) => {
    return (
        <button onClick={handleClick} {...otherProps} className='btn'>{label} </button>
    );
}

export default Button;
