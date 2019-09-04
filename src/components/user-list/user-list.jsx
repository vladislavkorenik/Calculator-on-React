import React, { Component } from 'react'


import { Link } from 'react-router-dom';
import Button from '../button';
import './user-list.css';

export default class UserList extends Component {
    state = {
        newUsers: JSON.parse(localStorage.getItem('createUser')) === null ? [] : 
                  JSON.parse(localStorage.getItem('createUser'))
    };

    inputPlace = false;

    deleteUser = (item) => {

        let arr = JSON.parse(localStorage.getItem('createUser'));
        arr = arr.filter( el => el.user !== item );

        localStorage.setItem('createUser',JSON.stringify(arr));

        this.setState({
            newUsers: JSON.parse(localStorage.getItem('createUser'))
        });
    };

    editUser = (item) => {
        this.inputPlace = true;

        let arr = JSON.parse(localStorage.getItem('createUser'));
        arr = arr.map( el => {
            el.user = el.user === item ? el.user = 'd' : el.user;
            return el;
        } );

        localStorage.setItem('createUser',JSON.stringify(arr));

        this.setState({
            newUsers: JSON.parse(localStorage.getItem('createUser'))
        });
    }

    render(){
        const arr = this.state.newUsers.map( item => 
            <li key={ item.user }>
                { this.inputPlace ? <input type="text"/> : <Link to = '/calculator'>{ item.user }</Link> }
                <div>
                    <Button props = { { value: 'Изменить', classes: 'user-list-button', func: this.editUser, item: item.user } }/>
                    <Button props = { { value: 'Удалить', classes: 'user-list-button', func: this.deleteUser, item: item.user } }/>
                </div>
            </li>);
        return(
            <div className = 'user-list'>
                <Link to = '/create-user'>Добавить пользователя</Link>
                <ul className = 'user'>
                    { arr }
                </ul>
            </div>
        );
    };
};