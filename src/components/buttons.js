import React from 'react';
import './buttons.css'


const Buttons = ({ add, clear, backspace, equal, radical }) => {
    return (
        <div className = 'buttons'>
            <button onClick={ () => clear() }>С</button>
            <button onClick={ () => backspace() }>СE</button>
            <button onClick={ () => add('%') }>%</button>
            <button onClick={ () => add('*') }>*</button>
            <button className="number" onClick={ () => add('1')}>1</button>
            <button className="number" onClick={ () => add('2')}>2</button>
            <button className="number" onClick={ () => add('3')}>3</button>
            <button onClick={ () => add('/') }>/</button>
            <button className="number" onClick={ () => add('4')}>4</button>
            <button className="number" onClick={ () => add('5')}>5</button>
            <button className="number" onClick={ () => add('6')}>6</button>
            <button onClick={ () => add('-') }>-</button>
            <button className="number" onClick={ () => add('7')}>7</button>
            <button className="number" onClick={ () => add('8')}>8</button>     
            <button className="number" onClick={ () => add('9')}>9</button>
            <button onClick={ () => add('+') }>+</button>
            <button onClick={ () => radical() }>&radic;</button>
            <button className="number" onClick={ () => add('0')}>0</button>
            <button onClick={ () => add('.') }>.</button>
            <button onClick={ () => equal() }>=</button>
        </div>
    );
};


export default Buttons;