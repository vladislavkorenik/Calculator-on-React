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
            item: '%',
            func: add
        },
        {
            value: '*',
            item: '*',
            func: add
        },
        {
            value: '1',
            item: '1',
            classes: 'number',
            func: add
        },
        {
            value: '2',
            item: '2',
            classes: 'number',
            func: add
        },
        {
            value: '3',
            item: '3',
            classes: 'number',
            func: add
        },
        {
            value: '/',
            item: '/',
            func: add
        },
        {
            value: '4',
            item: '4',
            classes: 'number',
            func: add
        },
        {
            value: '5',
            item: '5',
            classes: 'number',
            func: add
        },
        {
            value: '6',
            item: '6',
            classes: 'number',
            func: add
        },
        {
            value: '-',
            item: '-',
            func: add
        },
        {
            value: '7',
            item: '7',
            classes: 'number',
            func: add
        },
        {
            value: '8',
            item: '8',
            classes: 'number',
            func: add
        },
        {
            value: '9',
            item: '9',
            classes: 'number',
            func: add
        },
        {
            value: '+',
            item: '+',
            func: add
        },
        {
            value: 'sqrt',
            func: radical
        },
        {
            value: '0',
            item: '0',
            classes: 'number',
            func: add
        },
        {
            value: '.',
            item: '.',
            func: add
        },
        {
            value: '=',
            func: equal
        },
        {
            value: <Link to = '/add-button-page'>Добавить</Link>,
            classes: 'add-button link-button'
        },
    ];

    let buttons =  config.map( item => <Button key={ item.value } props = { item } />);
    let newButtons = JSON.parse(localStorage.getItem('addButton')) === null ? [] : JSON.parse(localStorage.getItem('addButton'));
    newButtons = newButtons.map( item => {
        item.func = add;
        return <Button key={ item.value } props = { item } />
    });
    return (
        <div className='buttons'>
            {buttons}
            {newButtons}
        </div>
    );
};


export default Buttons;