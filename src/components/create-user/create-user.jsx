import React, { Component } from 'react' 
import { Link } from 'react-router-dom';

import Button from '../button'


export default class CreateUser extends Component {
    state = {
        user: ''
    }

    arr = JSON.parse(localStorage.getItem('createUser')) === null ? [] : JSON.parse(localStorage.getItem('createUser'));

    enterValue = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    addNewUser = () => {
            this.arr.push({
                user: this.state.value
            })
            localStorage.setItem('createUser', JSON.stringify(this.arr))
    }

    deleteUsers = () => {
        localStorage.removeItem('createUser');
    }

    render() {
        return(
            <form className = 'create-user'>
                <input placeholder = 'Введите имя' 
                onChange = { this.enterValue }/>
                <div className = 'add-button-nav'>
                    <Link to = '/'><Button props = { { value: 'Добавить', classes: 'link-button', func: this.addNewUser } }/></Link>
                    <Link to = '/'><Button props = { { value: 'Назад', classes: 'link-button' } }/></Link>
                </div>
                <div className = 'delete-buttons'>
                    <Link to = '/'><Button props = { { value: 'Удалить всех пользователей', classes: 'link-button', func: this.deleteUsers } }/></Link>
                </div>
            </form>
        );
    }; 
};

