import React from 'react';
import './buttons.css'


const Buttons = ({ add, clear, backspace }) => {
    return (
        <div className = 'buttons'>
            <button onClick={ () => backspace() }>С</button>
            <button onClick={ () => clear() }>СE</button>
            <button>%</button>
            <button>*</button>
            <button className="number" onClick={ () => add('1')}>1</button>
            <button className="number" onClick={ () => add('2')}>2</button>
            <button className="number" onClick={ () => add('3')}>3</button>
            <button>/</button>
            <button className="number" onClick={ () => add('4')}>4</button>
            <button className="number" onClick={ () => add('5')}>5</button>
            <button className="number" onClick={ () => add('6')}>6</button>
            <button>-</button>
            <button className="number" onClick={ () => add('7')}>7</button>
            <button className="number" onClick={ () => add('8')}>8</button>     
            <button className="number" onClick={ () => add('9')}>9</button>
            <button>+</button>
            <button>&radic;</button>
            <button className="number" onClick={ () => add('0')}>0</button>
            <button>.</button>
            <button>=</button>
        </div>
    );
};


export default Buttons;