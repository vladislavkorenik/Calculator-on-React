import React, { Component } from 'react' 
import { Link } from 'react-router-dom';

import Button from '../button'
import './add-button.css'
import isNumeric from "../../logic/isNumeric";


export default class AddButton extends Component {
    state = {
        value: ''
    }

    arr = JSON.parse(localStorage.getItem('addButton')) === null ? [] : JSON.parse(localStorage.getItem('addButton'));

    enterValue = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    addNewButton = () => {
        if(isNumeric(this.state.value)) {
            this.arr.push({
                value: this.state.value,
                symbol: this.state.value,
                classes: 'number',
            })
            localStorage.setItem('addButton', JSON.stringify(this.arr))
        }   
    }

    deleteButtons = () => {
        localStorage.removeItem('addButton');
    }

    render() {
        return(
            <form className = 'add-button'>
                <input placeholder = 'Введите число' 
                onChange = { this.enterValue }/>
                <div className = 'add-button-nav'>
                    <Link to = '/'><Button props = { { value: 'Добавить', classes: 'link-button', func: this.addNewButton } }/></Link>
                    <Link to = '/'><Button props = { { value: 'Назад', classes: 'link-button' } }/></Link>
                </div>
                <div className = 'delete-buttons'>
                    <Link to = '/'><Button props = { { value: 'Удалить все кнопки', classes: 'link-button', func: this.deleteButtons } }/></Link>
                </div>
            </form>
        );
    }; 
};

