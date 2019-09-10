import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import Button from '../button';
import InputPlace from '../input-place';
import { editUser, deleteUser, chooseUser } from '../actions';
import './user-list.css';


class UserList extends Component {
    state = {
        newUsers: this.props.users === null ? [] : this.props.users,
        id: ''
    };

    deleteUser = (item) => {
        let arr = this.props.users.filter( el => el.id !== item );

        this.props.delete(arr);

        this.setState({
            newUsers: arr,
        });
    };

    editUser = (item) => {
        this.setState({
            id: item
        }); 
    }

    acceptUser = () => {
        let arr = this.props.users.map( el => {
            if(el.id === this.state.id) {
                el.user = localStorage.getItem('enterValue');
                el.id = `${localStorage.getItem('enterValue') + this.props.users.length}`
            }

            return el;
        } );

        this.props.edit(arr);

        this.setState({
            newUsers: arr
        }); 

        localStorage.removeItem('enterValue');
    }

    render(){
        const arr = this.state.newUsers.map( item => 
            <li key={ item.id }>
                { this.state.id === item.id ? <InputPlace/> : <Link to = '/calculator' onClick = { () => this.props.chooseUser(item.id) }>{ item.user }</Link> }
                <div>
                    <Button props = { { value: this.state.id === item.id ? 'Применить' : 'Изменить', classes: 'user-list-button', func: this.state.id === item.id ? this.acceptUser : this.editUser , item: item.id } }/>
                    <Button props = { { value: 'Удалить', classes: 'user-list-button', func: this.deleteUser, item: item.id } }/>
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

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (arr) => {
            dispatch(deleteUser(arr));
        },
        edit: (arr) => {
            dispatch(editUser(arr));
        },
        chooseUser: (value) => {
            dispatch(chooseUser(value));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);