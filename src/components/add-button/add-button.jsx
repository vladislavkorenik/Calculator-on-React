import React, { Component } from 'react' 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import Button from '../button'
import './add-button.css'
import isNumeric from "../../logic/isNumeric";
import { addNewButton, deleteButtons } from '../actions';


class AddButton extends Component {
    state = {
        value: ''
    }

    curentUser = this.props.users[this.props.users.findIndex( el => el.id === this.props.currenId)]

    enterValue = ( event) => {
        this.setState({
            value: event.target.value
        });
    };

    addNewButton = () => {
        if(isNumeric(this.state.value)) {
            this.curentUser.button.push({
                value: this.state.value,
                item: this.state.value,
                classes: 'number',
            })

            let arr = this.props.users;
            arr[arr.findIndex( el => el.id === this.props.currenId)] = this.curentUser;
            this.props.add(arr);
        }   
    }

    deleteButtons = () => {
        let arr = this.props.users;
        arr[arr.findIndex( el => el.id === this.props.currenId)] = [];
        this.props.add(arr);
    }

    render() {
        return(
            <form className = 'add-button'>
                <input placeholder = 'Введите число' 
                onChange = { this.enterValue }/>
                <div className = 'add-button-nav'>
                    <Link to = '/calculator'><Button props = { { value: 'Добавить', classes: 'link-button', func: this.addNewButton } }/></Link>
                    <Link to = '/calculator'><Button props = { { value: 'Назад', classes: 'link-button' } }/></Link>
                </div>
                <div className = 'delete-buttons'>
                    <Link to = '/calculator'><Button props = { { value: 'Удалить все кнопки', classes: 'link-button', func: this.deleteButtons } }/></Link>
                </div>
            </form>
        );
    }; 
};


const mapStateToProps = (state) => {
    return {
        users: state.users,
        currenId: state.currenId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (arr) => {
            dispatch(addNewButton(arr));
        },
        delete: (arr) => {
            dispatch(deleteButtons(arr));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);

