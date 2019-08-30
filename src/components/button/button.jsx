import React from 'react';
import './button.css'


const Button = ( { props:{ value, func, symbol, classes } } ) => {
    return (
        <button className={ classes } onClick={ () => func(symbol) }>{ value }</button>   
    );
};


export default Button;  