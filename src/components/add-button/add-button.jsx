import React from 'react' 
import { Link } from 'react-router-dom';

import Button from '../button'
import './add-button.css'


const AddButton = () => {
    return(
        <div className = 'add-button'>
            <input placeholder = 'Введите число'/>
            <div className = 'add-button-nav'>
            <Link to = '/'><Button props = { { value: 'Добавить', classes: 'link-button' } }/></Link>
            <Link to = '/'><Button props = { { value: 'Назад', classes: 'link-button' } }/></Link>
            </div>
        </div>
    );
};


export default AddButton