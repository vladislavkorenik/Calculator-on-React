import React from 'react'

import { Link } from 'react-router-dom';
import UserListItem from '../user-list-item';
import './user-list.css'

const UserList = () => {
    let newUsers = JSON.parse(localStorage.getItem('createUser')) === null ? [] : JSON.parse(localStorage.getItem('createUser')).map( item => <UserListItem key={ item.user } props = { item } />);;
    return(
        <div className = 'user-list'>
            <Link to = '/create-user'>Create</Link>
            <ul className = 'user'>
                { newUsers }
            </ul>
        </div>
    );
};

export default UserList