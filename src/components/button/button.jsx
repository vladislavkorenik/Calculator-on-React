import React from 'react';
import './button.css'


const Button = ( { props:{ value, func = console.log, item, classes } } ) => {
    return (
        <button className={ classes } onClick={ () => func(item) }>{ value }</button>   
    );
};


export default Button;  