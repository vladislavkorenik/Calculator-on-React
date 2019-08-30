import React from 'react';
import './button.css'


const Button = ( { props:{ value, func = console.log, symbol, classes } } ) => {
    return (
        <button className={ classes } onClick={ () => func(symbol) }>{ value }</button>   
    );
};


export default Button;  