import React from 'react';


const Button = ( { props:{ value, func, symbol, classes } } ) => {
    return (
        <button className={ classes } onClick={ () => func(symbol) }>{ value }</button>   
    );
};


export default Button;  