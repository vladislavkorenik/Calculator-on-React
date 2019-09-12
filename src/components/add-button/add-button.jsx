import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import Button from '../button';
import './add-button.css';
import { addNewButton, deleteButtons } from '../actions';


class AddButton extends Component {
    state = {
        number: ''
    };

    enterValue = ( event) => {
        this.setState({
            number: event.target.value
        });
    };

    render() {
        return(
            <form className = 'add-button'>
                <input placeholder = 'Введите число' 
                onChange = { this.enterValue }/>
                <div className = 'add-button-nav'>
                    <Link to = '/calculator'><Button props = { { value: 'Добавить', classes: 'link-button', func: this.props.addNewButton, item: this.state.number } }/></Link>
                    <Link to = '/calculator'><Button props = { { value: 'Назад', classes: 'link-button' } }/></Link>
                </div>
                <div className = 'delete-buttons'>
                    <Link to = '/calculator'><Button props = { { value: 'Удалить все кнопки', classes: 'link-button', func: this.props.deleteButtons } }/></Link>
                </div>
            </form>
        );
    }; 
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewButton: (number) => {
            dispatch(addNewButton(number));
        },
        deleteButtons: () => {
            dispatch(deleteButtons());
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddButton);

