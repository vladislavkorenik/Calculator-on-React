import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button'


const Buttons = ({ add, clear, backspace, equal, radical }) => {
    const config = [
        {
            value: 'C',
            func: clear
        },
        {
            value: 'CE',
            func: backspace
        },
        {
            value: 'mod',
            symbol: '%',
            func: add
        },
        {
            value: '*',
            symbol: '*',
            func: add
        },
        {
            value: '1',
            symbol: '1',
            classes: 'number',
            func: add
        },
        {
            value: '2',
            symbol: '2',
            classes: 'number',
            func: add
        },
        {
            value: '3',
            symbol: '3',
            classes: 'number',
            func: add
        },
        {
            value: '/',
            symbol: '/',
            func: add
        },
        {
            value: '4',
            symbol: '4',
            classes: 'number',
            func: add
        },
        {
            value: '5',
            symbol: '5',
            classes: 'number',
            func: add
        },
        {
            value: '6',
            symbol: '6',
            classes: 'number',
            func: add
        },
        {
            value: '-',
            symbol: '-',
            func: add
        },
        {
            value: '7',
            symbol: '7',
            classes: 'number',
            func: add
        },
        {
            value: '8',
            symbol: '8',
            classes: 'number',
            func: add
        },
        {
            value: '9',
            symbol: '9',
            classes: 'number',
            func: add
        },
        {
            value: '+',
            symbol: '+',
            func: add
        },
        {
            value: 'sqrt',
            func: radical
        },
        {
            value: '0',
            symbol: '0',
            classes: 'number',
            func: add
        },
        {
            value: '.',
            symbol: '.',
            func: add
        },
        {
            value: '=',
            func: equal
        },
        {
            value: <Link to = '/add-button-page'>Add</Link>,
            classes: 'add-button link-button'
        },
    ];

    let bottns =  config.map( item => <Button key={ item.value } props = { item } />);
    return (
        <div className='buttons'>
            {bottns}
        </div>
    );
};


export default Buttons;