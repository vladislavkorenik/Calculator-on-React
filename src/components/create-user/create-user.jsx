import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import Button from '../button';
import isName from "../../logic/isName";
import { addNewUsers, deleteAllUsers } from '../actions';


class CreateUser extends Component {
    state = {
        user: ''
    }

    arr = this.props.users === null ? [] : this.props.users;

    enterValue = (event) => {
        this.setState({
            user: event.target.value
        });
    };

    addNewUser = () => {
        if(isName(this.state.user)) {
            this.arr.push({
                user: this.state.user,
                button: [],
                history: [],
                id: `${this.state.user + this.arr.length * Math.random()}`
            })

            this.props.add(this.arr);
        }  
    }

    render() {
        return(
            <form className = 'create-user'>
                <input placeholder = 'Введите имя и фамилию' 
                onChange = { this.enterValue }/>
                <div className = 'add-button-nav'>
                    <Link to = '/'><Button props = { { value: 'Добавить', classes: 'link-button', func: this.addNewUser } }/></Link>
                    <Link to = '/'><Button props = { { value: 'Назад', classes: 'link-button' } }/></Link>
                </div>
                <div className = 'delete-buttons'>
                    <Link to = '/'><Button props = { { value: 'Удалить всех пользователей', classes: 'link-button', func: this.props.deleteUsers } }/></Link>
                </div>
            </form>
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
        add: (arr) => {
            dispatch(addNewUsers(arr));
        },
        deleteUsers: () => {
            dispatch(deleteAllUsers());
            localStorage.removeItem('users');
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUser);

